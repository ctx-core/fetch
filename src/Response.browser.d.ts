export declare const Response:{
	new(body?:BodyInit|null|undefined, init?:ResponseInit|undefined):Response;
	prototype:Response;
	error():Response;
	redirect(url:string|URL, status?:number|undefined):Response;
}
