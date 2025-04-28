const models = require("./admin.model");
const path = require('path');
const fs = require('fs');

const jobModel=models.Job

exports.jobInsert = async(req, res)=>{
    await jobModel.create(req.body)
    res.json('success')
}

exports.jobView=async (req,res)=>{
    const joblist = await jobModel.find();
    console.log(joblist);
    res.json(joblist);
  };

  exports.viewjob=async (req,res)=>{
    const joblists = await jobModel.find();
    console.log(joblists);
    res.json(joblists);
  };
