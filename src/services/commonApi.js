import axios from "axios";

const commonApi = async(reqMethod,reqUrl,reqBody)=>{
    const reqConfig = {
        method:reqMethod,
        url:reqUrl,
        data:reqBody,
        headers:{'Content-Type':'application/json'}
    }
    console.log(reqConfig);
    return await axios(reqConfig).then(res=>{return res}).catch(err=>{return err})
}

export default commonApi