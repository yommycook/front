import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Add = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>광고 1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>광고 2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>광고 3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>광고 4</h3>
            </div>
        </Carousel>
    );
};
export default Add;
