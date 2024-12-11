
import { Company } from "../models/companyModel.js";
import { User } from "../models/usermodel.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company Name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name:companyName });
    if (company) {
      return res.status(400).json({
        message: "You cant register same company",
        success: false,
      });
    }

    const user=await User.findById(req.id);
    console.log
    if (user.role != "recruiter") {
      return res.status(400).json({
        message: "You dont have access to register a company",
        success: false,
      });
    }

    company=await Company.create({
      name:companyName,
      userId:req.id
    });

    return res.status(200).json({
      message: "Company Registered successfully",
      company,
      success: true,
    });


  } catch (error) {
    console.log(error);
  }
};

//Get all companies under user name
export const getCompany = async (req, res) => {
  try {
    const userId=req.id;
    const companies=await Company.find({userId});
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }
    
    return res.status(200).json({
      companies,
      success: true,
    });

    
  } catch (error) {
    console.log(error);
  }
};

//get company by id
export const getCompanyById=async(req,res)=>{
  try {
    const companyId=req.params.id;
    const company=await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success:true
    })
  } catch (error) {
    console.log(error);
  }
}

export const updateCompany=async(req,res)=>{
  try {
    const {name,description,website,location}=req.body;
    const file=req.file;

    const updateData= {name,description,website,location};
    const company=await Company.findByIdAndUpdate(req.params.id, updateData, {new:true});

     if (!company) {
       return res.status(404).json({
         message: "Company not found",
         success: false,
       });
     }

      return res.status(200).json({
        message:"Updated Company InFormation Successfully",
        company,
        success: true,
      });

  } catch (error) {
    console.log(error)
  }
}