import Category from "../models/category";
import { categorySchema } from "../schema/product";
export const getAll=async(req,res)=>{
    try {
        const data = await Category.find(req.params.id);
        return res.json({
          message: "Lấy dữ liệu thanh công",
          data: data,
        });
    } catch (error) {
        return res.status(400).json({
            message:error.message,
        })
    }
}
export const getOne=async(req,res)=>{
    try {
        const data = await Category.findById(req.params.id).populate("products");
    return res.json({
      message: "Lấy dữ liệu thanh công",
      data: data,
    });
    } catch (error) {
        return res.status(400).json({
            message:error.message,
        })
    }
}
export const remove=async(req,res)=>{
    try {
    const data = await Category.findByIdAndDelete( req.params.id );
    return res.json({
      message: "Xóa thành công",
      data: data,
    });
    } catch (error) {
        return res.status(400).json({
            message:error.message,
        })
    }
}
export const update=async(req,res)=>{
    try {
        const data = await Category.findByIdAndUpdate(req.params.id ,req.body,{ new: true });
          return res.json({
            message: "Cập nhật thành công",
            data: data,
          });
    } catch (error) {
        return res.status(400).json({
            message:error.message,
        })
    }
}
export const create=async(req,res)=>{
    try {
        const {error} = categorySchema.validate(req.body,{abortEarly:false});
        if(error){
            return res.status(400).json({
                message:error.details.map((err)=>err.message)
            })
        }
        const data= await Category.create(req.body)
        return res.json({
            message: "Thêm thành công",
            data: data,
          });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}