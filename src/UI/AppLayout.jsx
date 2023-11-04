import Layout, { Content } from 'antd/es/layout/layout'
import HeroSection from '../components/CONTENTS/HeroSection'
import Sidebar from '../components/SIDEBAR/Sidebar'
import Sider from 'antd/es/layout/Sider'

const AppLayout = () => {
  return (
    <div className='container'>
      <Layout>
        <Sider
          style={{
            backgroundColor: 'red',
            height: '400px'
          }}
        >
          <Sidebar />
        </Sider>
        <Content
          style={{
            marginLeft: '60px',
            display:'flex',
            justifyContent:"center"
          }}
        >
          <HeroSection />
        </Content>
      </Layout>
    </div>
  )
}

export default AppLayout
