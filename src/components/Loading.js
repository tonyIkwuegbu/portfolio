import { CubeGrid } from "better-react-spinkit";

function Loading() {
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh" }}>
        <div>
        
       
        {/* <img 
        src={`${process.env.PUBLIC_URL}/brand.png`}
        alt="brand"
        style={{marginBottom:10}}
        height={100}
        
        /> */}

         <CubeGrid color="#233e8b" size={70} />
        
         
        </div>
      </center>
    )
}

export default Loading;