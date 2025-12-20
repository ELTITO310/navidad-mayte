type WaveProps = React.HTMLAttributes<SVGElement> & {
    fill?: string;
}

const Wave = ({fill, ...props}: WaveProps) => {
    return ( 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" {...props}><path fill={fill} fillOpacity="1" d="M0 128h480l480 32 480-64v224H0Z"/></svg>
     );
}
 
export default Wave;