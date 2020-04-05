import * as React from "react";
import Content from "../shared/Content";
import "./Dashboard.scss";
import {Row, Statistic, Col, Card, Calendar, Badge, Tabs} from "antd";
import ArrowUpOutlined from "@ant-design/icons/es/icons/ArrowUpOutlined";
import ArrowDownOutlined from "@ant-design/icons/es/icons/ArrowDownOutlined";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {type: 'warning', content: 'This is warning event.'},
        {type: 'success', content: 'This is usual event.'},
      ];
      break;
    case 10:
      listData = [
        {type: 'warning', content: 'This is warning event.'},
        {type: 'success', content: 'This is usual event.'},
        {type: 'error', content: 'This is error event.'},
      ];
      break;
    case 15:
      listData = [
        {type: 'warning', content: 'This is warning event'},
        {type: 'success', content: 'This is very long usual event。。....'},
        {type: 'error', content: 'This is error event 1.'},
        {type: 'error', content: 'This is error event 2.'},
        {type: 'error', content: 'This is error event 3.'},
        {type: 'error', content: 'This is error event 4.'},
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content}/>
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}


const Dashboard = (props) => {
  return (
    <Content type={'wide'}>
      <Tabs defaultActiveKey="1" size={'large'}>
        <Tabs.TabPane tab="Fabian" key="1">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Collected credits this week (59)"
                  value={8.28}
                  precision={2}
                  valueStyle={{color: '#3f8600'}}
                  prefix={<ArrowUpOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Hours this week (29h)"
                  value={9.3}
                  precision={2}
                  valueStyle={{color: '#cf1322'}}
                  prefix={<ArrowDownOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop: '20px'}}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Asked for help this week (3)"
                  value={3.9}
                  precision={2}
                  valueStyle={{color: '#cf1322'}}
                  prefix={<ArrowDownOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Average grade (4.25)"
                  value={1.32}
                  precision={2}
                  valueStyle={{color: '#3f8600'}}
                  prefix={<ArrowUpOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <div style={{marginTop: '50px'}}>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Selina" key="2">
          <Row gutter={16}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Collected credits this week (59)"
                  value={8.28}
                  precision={2}
                  valueStyle={{color: '#3f8600'}}
                  prefix={<ArrowUpOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Hours this week (29h)"
                  value={9.3}
                  precision={2}
                  valueStyle={{color: '#cf1322'}}
                  prefix={<ArrowDownOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <Row gutter={16} style={{marginTop: '20px'}}>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Asked for help this week (3)"
                  value={3.9}
                  precision={2}
                  valueStyle={{color: '#cf1322'}}
                  prefix={<ArrowDownOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <Statistic
                  title="Average grade (4.25)"
                  value={1.32}
                  precision={2}
                  valueStyle={{color: '#3f8600'}}
                  prefix={<ArrowUpOutlined/>}
                  suffix="%"
                />
              </Card>
            </Col>
          </Row>
          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} style={{marginTop: '50px'}}/>
        </Tabs.TabPane>
      </Tabs>
    </Content>
  )
};

export default Dashboard;
