import { Webhook } from "svix";
import { ApiError } from "../utils/ApiError.js";
import userModel from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
export const clerkWebHook=asyncHandler(async(req,res)=>{
    const webHookSecret=process.env.CLERK_WEBHOOK_SECRET;
    if(!webHookSecret){
        throw new ApiError(400,"Webhook secret is need!");
    }
    const payload = req.body;
    const headers = req.headers;
    const webhook = new Webhook(webHookSecret);
    let event;
    try {
        event = await webhook.verify(payload, headers);
        console.log(event.data);
    } catch (err) {
        throw new ApiError(400,"Webhook varification failed!")
    }
    if(event.type=="user.created"){
        try {
            const user=new userModel({
                clerkUserId:event.data.id,
                username:event.data.username || event.data.email_addresses[0].email_address,
                email:event.data.email_addresses[0].email_address,
                img:event.data.image_url
            });
            const response=await user.save();
            console.log(response);
            return res.status(201).json({message:"User created successfully!"});
        } catch (error) {
            throw new ApiError(500,error.message);
        }
    }
    
});