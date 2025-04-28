const path = require('path');
const models = require('./user.model');
const { log } = require('console');
const videoModel = models.video;
const feedbackModel = models.feedback
const fs = require('fs')
exports.AddVideo = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
        console.error('No files were uploaded.');
        return res.status(400).json({ error: 'No files were uploaded.' });
    }

    const videoFile = req.files.video;
    const uploadPath = path.join(__dirname,'..', 'public', 'video', videoFile.name);
    // const filepath = path.join(__dirname, '..', 'public', 'music', filename);

    // Move the file to the desired location
    videoFile.mv(uploadPath, async (err) => {
        if (err) {
            console.error('Error moving the file:', err);
            return res.status(500).json({ error: 'Error moving the file' });
        }

        // Save file data to the database
        const videoData = {
            category: req.body.category,
            email: req.body.email,
            video: videoFile.name,
            userid: req.body.userid
        };

        try {
            await videoModel.create(videoData);
            res.json(  'Video added successfully' );
        } catch (dbError) {
            console.error('Error saving video to the database:', dbError);
            res.status(500).json({ error: 'Error saving video' });
        }
    });
} catch (error) {
    console.error('Error handling the request:', error);
    res.status(500).json({ error: 'Error handling the request' });
}
};



exports.viewVideo = async (req, res) => {
    try {
        const userId = req.body.id;
        const videolist = await videoModel.find({ userid: userId }).populate('userid')
        res.json(videolist);
    } catch (error) {
        console.error('Error fetching videos:', error);
        res.status(500).json({ error: 'Error fetching videos' });
    }
};

exports.deleteVideo = async (req, res) => {
    try {
        const delId = req.body.id;
        const deletedVideo = await videoModel.findByIdAndDelete(delId);
        if (!deletedVideo) {
            return res.status(404).json({ error: "Video not found" });
        }
        res.status(200).json({ message: "Video deleted successfully" });
    } catch (error) {
        console.error("Error deleting video:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

exports.getvideo = async (req, res) => {
    const { id } = req.body;
    try {
      const video = await videoModel.findById(id).populate('userid')
      // console.log(video);
      res.json(video);
    } catch (error) {
      res.status(500).send('Error fetching video');
    }
  };

  exports.updatevideo = async (req, res) => {
    try {
      const { id, category } = req.body;
      const videoFile = req.files ? req.files.video : null;
  
      let updateData = { category };
  
      if (videoFile) {
        const uploadPath = path.join(__dirname, '..', 'public', 'video', videoFile.name);
        
        // Move the file to the desired location
        await videoFile.mv(uploadPath);
        
        // Delete the old video file if a new file is uploaded
        const oldVideo = await videoModel.findById(id);
        const oldVideoPath = path.join(__dirname, '..', 'public', 'video', oldVideo.video);
        if (fs.existsSync(oldVideoPath)) {
          fs.unlinkSync(oldVideoPath);
        }
  
        updateData.video = videoFile.name;
      }
  
      await videoModel.findByIdAndUpdate(id, updateData);
      res.json({ success: true });
    } catch (error) {
      console.error('Error updating video:', error);
      res.status(500).json({ success: false, error: 'Error updating video' });
    }
  }
  


exports.viewvideos = async (req, res) => {
  try {
      const videolist = await videoModel.find().populate('userid');
      res.json(videolist);
  } catch (error) {
      console.error('Error fetching videos:', error);
      res.status(500).json({ error: 'Error fetching videos' });
  }
};

    exports.addFeedback= async (req,res) =>{
      try {
        await feedbackModel.create(req.body);
        res.json({ message: 'Feedback added successfully' });
      } catch (error) {
        console.error('Error adding feedback:', error);
        res.status(500).json({ error: 'Error adding feedback' });
      }
    }

    exports.viewFeedback= async (req,res) =>{
      try {
        const feedbackList = await feedbackModel.find().populate('userid');
        res.json(feedbackList);
        console.log(feedbackList);
      } catch (error) {
        console.error('Error viewing feedback:', error);
        res.status(500).json({ error: 'Error viewing feedback' });
      }
    }