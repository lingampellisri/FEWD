import { retry } from "@reduxjs/toolkit/query";
import React,{Component} from "react";

class ErrorBoundary extends Component
{
    constructor()
    {
        super();

        this.state={
            hasError:false
        }

    }

    static getDerivedStateFromError(error)
    {
        return{
            hasError:true
        }
    }
//     componentDidCatch(error, info) {
//     // You can log the error to an error reporting service
//     console.error("ErrorBoundary caught an error:", error, info);
//   }



    render() {
        
            if(this.state.hasError)
                return <h1>Something went Wrong</h1>
            return this.props.children;
    }
}

export default ErrorBoundary;