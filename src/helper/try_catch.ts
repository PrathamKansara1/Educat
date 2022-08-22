export function TryCatch() {
    return function (target:any, name:string, descriptor:PropertyDescriptor) {
      const fn = descriptor.value;
      descriptor.value = async (...args: any[])=>{
        try {
          const response = await fn.apply(this, args);
          return response;
        } catch (err) {
          // Handle error here
          console.log((err as Error).message);
        }
      }
    }
  }