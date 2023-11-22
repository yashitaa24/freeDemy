import { Row, Col, Container } from 'react-bootstrap'
import FeaturesCard from './FeaturesCard'

const Features = () => {
  return (
    <section className="features text-center mt-5">
      <Container>
        <Row className="d-flex align-items-center" >
          <Col lg={6} md={12} style={{ textAlign: 'left' }}>
            <h2 className="mb-3">Don't waste your valuable time</h2>
            <p>Only Freedemy has all the critical factors to deliver real results.</p>
            <p>Our curated collection of top-rated business and technical courses gives companies, governments,
            and nonprofits the power to develop in-house expertise and satisfy employees’ hunger for learning
            and development.</p>
            <p className="mb-5">Empower your remote workforce to learn what they need, when they need it. Online learning from global experts across tech, business, wellness and more to help your employees do whatever comes next.</p>
          </Col>
          <Col lg={3} md={6}>
            <FeaturesCard
              imgSrc='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg'
              alt='Employeable skills icon'
              title='Get real employable skills'
              text='Our curriculum is designed with top-tier industry partners, so you learn the high-impact skills that top companies want.'
            />

            <FeaturesCard
              imgSrc='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg'
              alt='ActiveLearning icon'
              title='Project-based learning'
              text='Learn by doing with real-world projects and other hands-on exercises that lead to real skills mastery.'
            />
          </Col>

          <Col lg={3} md={6}>
            <FeaturesCard
              imgSrc='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg'
              alt='Schedule icon'
              title='Learn on your schedule'
              text='Self-paced learning - whenever and wherever you want. Graduate while learning part-time for 10 hrs/week.'
            />
            <FeaturesCard
              imgSrc='https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-2.jpg'
              alt='Help you need icon'
              title='The help you need'
              text='Reach out to our mentors 24/7 and have your coding questions answered quickly so you can keep learning.'
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Features