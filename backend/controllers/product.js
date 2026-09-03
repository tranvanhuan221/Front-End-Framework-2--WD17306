import Product from "../models/product";
import { productSchema } from "../schema/product";
import category from "../models/category";
export const getAll=async(req,res)=>{
    try {
        const data = await Product.find(req.params.id);
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
        const data = await Product.findById(req.params.id).populate("categoryId");
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
    const data = await Product.findByIdAndDelete( req.params.id );
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
        const data = await Product.findByIdAndUpdate(req.params.id ,req.body,{ new: true });
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
        const {error} = productSchema.validate(req.body,{abortEarly:false});
        if(error){
            return res.status(400).json({
                message:error.details.map((err)=>err.message)
            })
        }
        const data= await Product.create(req.body)
        await category.findByIdAndUpdate(data.categoryId,{
            $addToSet:{
                products: data._id
            }
        })
        return res.json({
            message: "thêm thành công",
            data: data,
          });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}