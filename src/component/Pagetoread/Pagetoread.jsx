import { BarChart as BChart, Bar,XAxis} from 'recharts';



const Pagetoread = () => {

    const data = 
    [
        {id: 1, name:'1984', page:328},
        {id: 2, name:'To Kill a Mockingbird', page:336},
        {id: 3, name:'The Catcher in the Rye', page:224},
        {id: 4, name:'The Great Gatsby', page:180},
        {id: 5, name:'The Hobbit', page:310},
        {id: 6, name:'Pride and Prejudice', page:279},
        {id: 7, name:'The Alchemist', page:208},
        {id: 8, name:'The Lord of the Rings', page:1178},
        {id: 9, name:'Harry Potter', page:352}
    ];


    return (
        <div>
            {/* <LChart width={500} height={400} data={data}>
                <Line dataKey="page"></Line>
            </LChart> */}
            <BChart width={1169}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
                <XAxis dataKey="name"></XAxis>
                <Bar dataKey="page" shape="TriangleBar" label={{ position: 'top' }}></Bar>
            </BChart>
        </div>
    );
};

export default Pagetoread;





