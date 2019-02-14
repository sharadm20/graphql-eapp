import User from "../../../server/models/User";
import bcrypt from "bcrypt";
import {OAuth2Client} from 'google-auth-library';
import axios from 'axios';
import querystring from 'querystring';

 const client = new OAuth2Client(process.env.clientId);
export default {
  Query: {
  async me (_, args, { user }) {
          // make sure user is logged in
          if (!user) {
            throw new Error('You are not authenticated!')
          }

          // user is authenticated
          return await User.findById(user.id)
        }
  },
  Mutation: {
   async signup (_, { user }) {
    if(user.password!=null && user.password!==user.confirm_password){
      throw new Error('Password and Confirm Password did not match')
    }
       let userP= await User.findOne({email:user.email});
          if (!userP) {
          let newUser=await User.create({
            name:user.name,
            email:user.email,
            password: await bcrypt.hash(user.password, 10)
          });
    
          // return json web token
          return newUser;
          }
          else {
            throw new Error('Email already registered')
          }
        },
        async signin (_, { user, strat }) {
          if(strat==='local'){
          const user = await User.findOne({ where: { email } })
         
          if (!user) {
            throw new Error('No user with that email')
          }

          const valid = await bcrypt.compare(password, user.password)

          if (!valid) {
            throw new Error('Incorrect password')
          }

          // return json web token
          return jsonwebtoken.sign(
            { _id: user._id, email: user.email },
            process.env.secretOrKey,
            { expiresIn: '1y' }
          )
        }
        if(strat==='google'){
             if(!user.idToken){
                throw new Error('id-token is not given');
            }
            
            async function verify() {
                const ticket = await client.verifyIdToken({
                    idToken: user.idToken,
                    audience: [process.env.clientId, process.env.clientId2, '407408718192.apps.googleusercontent.com'], // Specify the CLIENT_ID of the app that accesses the backend
                    // Or, if multiple clients access the backend:
                    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
                })
              const payload = ticket.getPayload();
              const userid = payload['sub'];
              return Promise.resolve(userid);
            }
            verify().
            then(async (userid)=>{
              let user= await User.findOne({userid:userid});
              if(!user){
                 let url = `https://oauth2.googleapis.com/tokeninfo?id_token=${user.idToken}`;
                 let guser = await axios.get(url);
                 let newUser= await User.create({
                   userid: guser.sub,
                   email: guser.email,
                   imageurl: guser.pictures
                 })
                 return jsonwebtoken.sign(
            { _id: newUser._id, email: newUser.email, userid: newUser.userid },
            process.env.secretOrKey,
            { expiresIn: '1y' })
              }else{
                 return jsonwebtoken.sign(
            { _id: user._id, email: user.email, userid: user.userid },
            process.env.secretOrKey,
            { expiresIn: '1y' })
              }
            }).
            catch(err=>{
              throw new Error(err);
            });
        }
      } 
  }
};
