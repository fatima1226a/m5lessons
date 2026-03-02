import CardCustom from './components/Card'
import { Card, Space } from 'antd';
import { Button, Flex } from 'antd';
import WrapperCard from './components/WrapperCard';
import List from './components/List';

function App() {

  return (
  
    <div>
      <h2>App</h2>
      <Button type="primary">Primary Button</Button>
      <Space vertical size={16}>
        <Card 
        title="Default size card" 
        extra={<a href="#">More</a>} 
        style={{ width: 300 }} 
        cover={
      <img
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
      >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card 
        size="small" 
        title="Small size card" 
        extra={<a href="#">More</a>} 
        style={{ width: 300 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
      <WrapperCard>
        <CardCustom
          name={"Card 1"} 
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, doloribus?"
            } 
            />
          <CardCustom
          name={"Card 2"} 
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, doloribus?"
            } 
        />
      </WrapperCard>
      {/* <List /> */}

    </div>
    
  )
}

export default App
