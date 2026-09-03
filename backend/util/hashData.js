import bcrypt from "bcryptjs";
const hashData = async (data, saltRounds = 10   )=>{
    try {
        const hashedData = await bcrypt.hash(data,saltRounds);
        return hashedData;
    } catch (error) {
        throw error
    }
}
export default hashData;