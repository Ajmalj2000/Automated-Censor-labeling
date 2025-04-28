const models = require('./register.model');
const userModel = models.user;
const loginModel = models.login;

exports.register = async (req, res) => {
    try {
        const loginParams = {
            email: req.body.email,
            password: req.body.password,
            userstatus: req.body.userstatus,
            block:req.body.block,
        };
        const logins = await loginModel.create(loginParams); 
        const userparams = {
            name: req.body.name,
           address: req.body.address,
            dob: req.body.dob, 
            contact: req.body.contact,
            userid: logins._id 
        };
        await userModel.create(userparams);
        res.json('success');
    } catch (error) {  
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.logIn = async (req, res) => {
    try {
        const param = {
            email: req.body.email,
            password: req.body.password
        };

        const logs = await loginModel.findOne({ email: param.email })

        if (logs && logs.password === param.password) {
            const user = await userModel.findOne({ userid: logs._id }).populate('userid')

            let userdata = {
                ...logs.toObject(),
                user: user ? user.toObject() : null
            };

            req.session.user = userdata;
            console.log(userdata);
            res.json(userdata);
        } else {
            res.status(401).json('invalid');
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json('invalid');
    }
};


exports.viewUser = async (req, res) => {
    try {
        const usersWithStatus = await loginModel.find({ userstatus: 2 }).select('_id');
        const userIds = usersWithStatus.map(user => user._id);
        const userList = await userModel.find({ userid: { $in: userIds } }).populate('userid');
        res.json({ userList });
    } catch (error) {
        console.error('Error during fetching:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.body.id);
        if (!user) {
            return res.status(404).json({ error: ' not found' });
        }
        
        const userId = user.userid;
        await loginModel.findByIdAndDelete(userId); 
        await userModel.findByIdAndDelete(req.body.id); 

        res.json({ success: true, message: ' deleted successfully' });
    } catch (error) {
        console.error("Error deleting :", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.findUser = async (req, res) => {
    try {
        const findId = req.body.id;
        const user = await userModel.findOne({ _id: findId }).populate('userid');
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
console.log(user);
        res.json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.editUser = async (req, res) => {
    try {
        const { id, name, dob, address, contact, email } = req.body;
        const user = await userModel.findOneAndUpdate(
            { _id: id },
            { name, dob, address, contact },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await loginModel.findByIdAndUpdate(
            id,
            { email },
            { new: true }
        );

        res.json(user);
    } catch (error) {
        console.error("Error updating:", error);
        res.status(500).json({ error: "Error on update" });
    }
};

exports.blockUser = async (req, res) => {
    try {
      const { id } = req.body;
      const user = await loginModel.findById(id);
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.userstatus = 5; // Set block status to true (1)
      await user.save();
  
      res.json({ message: 'User blocked successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
 

// Example endpoint
exports.profile = async (req, res) => {
    try {
      const userDetails = await userModel.findOne({ userid: req.params.id }).populate('userid');
      if (!userDetails) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(userDetails);
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  


// Update user details

    exports.profileupdate= async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { userid: req.params.id },
            { ...req.body },
            { new: true }
        );
        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.userDatas = async (req, res) => {
    try {
        const { id } = req.body; // Correct destructuring here
        console.log('User ID:', id);
        const userDetails = await userModel.findOne({ userid: id }).populate('userid');
        
        if (!userDetails) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json(userDetails);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};