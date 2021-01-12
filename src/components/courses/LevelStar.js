import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
const LevelStart = (Starlevel) => {

    let starArray = new Array(5); for (let i=0; i<5; ++i) starArray[i] = i+1;
    return ( 
        <div>
            {starArray.map( item => {
                if(item < Starlevel.level){
                    return <StarIcon key="item"/>
                }else{
                    return <StarBorderIcon key="item"/>
                }
            })}
        </div>
     );
}
 
export default LevelStart;