import React from 'react';
import 'antd/dist/antd.css';
import '../styles/index.css';
import { Card, Col, Row } from 'antd';
import { Button } from 'antd';

const Cards = () => {
  
    return(           
      <div className = "container">
        <div className= "site-card-wrapper">

      <Row gutter={16}>
        <Col span={8}>
          <Card title="Item 1" bordered={false}>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
          <br></br><br></br>
          <Button type="primary" danger block>
            Delete
          </Button>
          </Card>         
        </Col>

        <Col span={8}>
          <Card title="Item 2" bordered={false}>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
          <br></br><br></br>
          <Button type="primary" danger block>
            Delete
          </Button>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Item 3" bordered={false}>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries
          <br></br><br></br>
          <Button type="primary" danger block>
            Delete
          </Button>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
       
  );  
}


  export default Cards;



