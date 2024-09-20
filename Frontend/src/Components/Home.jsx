import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="hero" className="d-flex align-items-center justify-content-center hero-section">
        <div className="wrapper">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="container text-center content-overlay ">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='hero'
          >
            Welcome to EduInspect AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='title'
          >
            Revolutionizing Institutional Inspections with Cutting-Edge Technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#features" className="btn btn-lg me-3 title">
              Discover Features
            </a>
            <a href="#about" className="btn learn btn-lg title">
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

     {/* AI-Powered Analysis Section */}
     <section id="ai-analysis" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center mb-5">AI-Powered Analysis</h2>
          <div className="row">
            <div className="col-md-6">
              <motion.img
                src="https://cdn.pixabay.com/photo/2024/04/05/05/16/businesswoman-8676522_1280.jpg" 
                alt="AI Analysis"
                className="img-fluid image mb-3 shadow-lg shadow-lgs "
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
              />
            </div>
            <div className="col-md-6">
              <motion.p
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                Our AI technology leverages advanced image recognition and machine learning to analyze institutional environments, identifying potential issues like missing equipment or infrastructure problems. With AI-powered insights, we streamline the inspection process for greater accuracy and efficiency.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Verification Section */}
      <section id="blockchain" className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-5">Blockchain Verification</h2>
          <div className="row">
            <div className="col-md-6">
              <motion.p
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                EduInspect AI ensures the authenticity of all data using blockchain technology. Every image and compliance report is securely geotagged and timestamped, and all data is stored on a blockchain ledger, making it tamper-proof and auditable.
              </motion.p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg" 
                alt="Blockchain Verification"
                className="img-fluid mb-3 bl-img shadow-lg shadow-lgs"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Language Processing Section */}
      <section id="nlp" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center mb-5">Natural Language Processing (NLP)</h2>
          <div className="row">
            <div className="col-md-6">
              <motion.img
                src="https://images.prismic.io/turing/652ebe6bfbd9a45bcec81881_Natural_Language_Processing_Functionality_in_AI_95cadec9bc.webp?auto=format,compress" 
                alt="NLP"
                className="img-fluid mb-3 np-img shadow-lg shadow-lgs"
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
              />
            </div>
            <div className="col-md-6">
              <motion.p
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                With advanced NLP algorithms, EduInspect AI processes compliance documents, faculty credentials, and student reports in seconds. This allows for faster and more accurate inspections, ensuring institutions remain compliant with regulatory standards.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Machine Learning Insights Section */}
      <section id="machine-learning" className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-5">Machine Learning Insights</h2>
          <div className="row">
            <div className="col-md-6">
              <motion.p
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                EduInspect AI learns from past inspections using machine learning algorithms, providing predictive insights that help institutions identify future risks. This proactive approach reduces non-compliance and promotes continuous improvement.
              </motion.p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_1280.jpg" 
                alt="Machine Learning"
                className="img-fluid mb-3 shadow-lg shadow-lgs"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Feedback Section */}
      <section id="feedback" className="py-5 bg-light text-dark">
        <div className="container">
          <h2 className="text-center mb-5">Real-Time Feedback</h2>
          <div className="row">
            <div className="col-md-6">
              <motion.img
                src="https://cdn.pixabay.com/photo/2020/04/04/03/42/chat-5000695_1280.png" 
                alt="Feedback"
                className="img-fluid mb-3 shadow-lg shadow-lgs"
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
              />
            </div>
            <div className="col-md-6">
              <motion.p
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                EduInspect AI incorporates real-time feedback from students and faculty into the inspection process. This ensures data accuracy and promotes transparency, allowing institutions to quickly address issues and improve the educational experience.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Section */}
      <section id="cloud" className="py-5 bg-dark text-light">
        <div className="container">
          <h2 className="text-center mb-5">Cloud Infrastructure</h2>
          <div className="row">
            <div className="col-md-6">
              <motion.p
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}>
                Our system is built on scalable cloud infrastructure, ensuring that your institution’s data is secure, accessible, and scalable. Whether you’re processing a single report or thousands, EduInspect AI delivers consistent, high-quality results.
              </motion.p>
            </div>
            <div className="col-md-6">
              <motion.img
                src="https://media.istockphoto.com/id/1339235818/vector/data-center-isometric-concept-server-room-with-hardware-racks-or-web-hosting-infrastructure.webp?s=1024x1024&w=is&k=20&c=aW5xz5-BlFuopiVlYumaYVIJpaVIh27o9Wbv551AquQ=" 
                alt="Cloud Infrastructure"
                className="img-fluid mb-3 shadow-lg shadow-lgs"
                initial={{ opacity: 0, x: 100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default Home;
