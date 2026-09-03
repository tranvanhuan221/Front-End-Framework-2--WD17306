import joi from "joi";
export const productSchema = joi.object({
name:joi.string().required(),
price:joi.number().required(),
img:joi.string().required(),


});
export const categorySchema = joi.object({
    name:joi.string().required(),
  
})