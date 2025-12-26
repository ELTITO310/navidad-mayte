import './styles.css'

interface TreeProps {
    moment?: 'day' | 'night';
}

const Tree = ({ moment = 'day' }: TreeProps) => {
    return ( <div className={`tree-container ${moment === 'night' ? 'night' : ''}`}>
        <div className="tree">
            <div className={`star drop-shadow-yellow-500 drop-shadow-xl`} />
            <div className="cone"/>
            <div className='cone' />
            <div className='cone' />
            <div className='trunk' />
        </div>
    </div> );
}
 
export default Tree;