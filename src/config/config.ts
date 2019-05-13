let global = {
    server: "dev",  //dev, production  
    api_url_dev: "http://sdgacademy.web.id/sdgc/public/api/",
    api_url_prod: "http://sdgacademy.web.id/sdgc/public/api/",
    api_url_image:"",    
    api_cloudinary:"https://api.cloudinary.com/v1_1/dfsxhf7dz/image/upload",    
    upload_preset:"eiknnxtk",
    TRACKER_ID:"UA-117512327-1",
    //header for API
    header: {
        "cache-control": "no-cache",
        "Content-Type": "application/json"
    },
    headerEncoded: {
    },
    apis:{
        get01:"child01s",
        get02:"child02s",
        get03:"child03s",
    }
}

export default global;

export class ApiHelper {
    
    constructor() {}

    getAbsoluteApiUrl() {
        switch (global.server) {
            case "dev":
            return global.api_url_dev

            default:
            return global.api_url_prod
        }
    }

    getApiUrl(path: string) {
        return this.getAbsoluteApiUrl() + path;
    }

    getApiCloudinary() {
        return global.api_cloudinary;
    }
}