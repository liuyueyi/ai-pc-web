<template>
    <div class="about-view">
      <section class="about-hero">
        <div class="about-hero-content">
          <h1 class="about-title">关于我</h1>
          <p class="about-subtitle">提供一个APP展示平台，展示我们的app能力</p>
        </div>
      </section>
      
      <section class="about-mission">
        <div class="mission-container">
          <div class="mission-content">
            <h2 class="mission-title">宗旨</h2>
            <p class="mission-text">
                在AI重塑世界的今天，我们致力于打破技术与创造的边界，让每个人都能成为智能时代的创变者。
                <br/>
                我们相信，代码不应只是程序员的专利，而是人类表达思想的「新语言」；
                <br/>
                AI工具不仅是效率助手，更是激发创意的「思维催化剂」。
                <br/>
                我们将提供一些案例，让非技术人员也可以借助AI创建自己的专属APP
            </p>
          </div>
          <div class="mission-image">
            <img src="/static/about-cover.jpg" alt="Our Mission" class="image" />
          </div>
        </div>
      </section>
      
      <section class="about-team">
        <div class="team-container">
          <h2 class="team-title">Meet Our Team</h2>
          <p class="team-subtitle">The passionate individuals behind APP Showcase</p>
          
          <div class="team-grid">
            <div class="team-member">
              <div class="member-avatar">
                <img src="/placeholder.svg?height=200&width=200" alt="Team Member" class="avatar-image" />
              </div>
              <h3 class="member-name">Jane Doe</h3>
              <p class="member-role">Founder & CEO</p>
              <p class="member-bio">
                With over 10 years of experience in the tech industry, Jane leads our vision and strategy.
              </p>
            </div>
            
            <div class="team-member">
              <div class="member-avatar">
                <img src="/placeholder.svg?height=200&width=200" alt="Team Member" class="avatar-image" />
              </div>
              <h3 class="member-name">John Smith</h3>
              <p class="member-role">CTO</p>
              <p class="member-bio">
                John oversees our technical infrastructure and ensures a seamless user experience.
              </p>
            </div>
            
            <div class="team-member">
              <div class="member-avatar">
                <img src="/placeholder.svg?height=200&width=200" alt="Team Member" class="avatar-image" />
              </div>
              <h3 class="member-name">Emily Chen</h3>
              <p class="member-role">Head of Partnerships</p>
              <p class="member-bio">
                Emily builds relationships with app developers and ensures quality content on our platform.
              </p>
            </div>
            
            <div class="team-member">
              <div class="member-avatar">
                <img src="/placeholder.svg?height=200&width=200" alt="Team Member" class="avatar-image" />
              </div>
              <h3 class="member-name">Michael Johnson</h3>
              <p class="member-role">UX Designer</p>
              <p class="member-bio">
                Michael crafts beautiful, intuitive interfaces that make our platform a joy to use.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="about-values">
        <div class="values-container">
          <h2 class="values-title">Our Values</h2>
          
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">🚀</div>
              <h3 class="value-name">Innovation</h3>
              <p class="value-description">
                We celebrate creativity and forward-thinking in all the apps we showcase.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3 class="value-name">Community</h3>
              <p class="value-description">
                We foster connections between developers and users to create a thriving ecosystem.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">✨</div>
              <h3 class="value-name">Quality</h3>
              <p class="value-description">
                We curate only the best apps that meet our high standards for design and functionality.
              </p>
            </div>
            
            <div class="value-card">
              <div class="value-icon">🌱</div>
              <h3 class="value-name">Growth</h3>
              <p class="value-description">
                We support developers in reaching new audiences and expanding their impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section class="about-contact">
        <div class="contact-container">
          <h2 class="contact-title">Get In Touch</h2>
          <p class="contact-text">
            Have questions or want to feature your app on our platform? We'd love to hear from you!
          </p>
          
          <form class="contact-form">
            <div class="form-group">
              <label for="name" class="form-label">Name</label>
              <input type="text" id="name" class="form-input" placeholder="Your name" />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-input" placeholder="Your email" />
            </div>
            
            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" class="form-textarea" placeholder="Your message" rows="5"></textarea>
            </div>
            
            <button type="submit" class="form-submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // No additional setup needed for AboutView
  </script>
  
  <style scoped>
  .about-view {
    width: 100%;
  }
  
  .about-hero {
    height: 40vh;
    min-height: 300px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .about-hero-content {
    max-width: 800px;
    padding: 0 2rem;
  }
  
  .about-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  
  .about-subtitle {
    font-size: 1.2rem;
    color: #666;
  }
  
  .about-mission {
    padding: 5rem 2rem;
    background-color: #fff;
  }
  
  .mission-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  
  .mission-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  
  .mission-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
  }
  
  .mission-image {
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .image {
    width: 100%;
    display: block;
  }
  
  .about-team {
    padding: 5rem 2rem;
    background-color: #f9f9f9;
  }
  
  .team-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .team-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .team-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
  }
  
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .team-member {
    background-color: #fff;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .team-member:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .member-avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
  }
  
  .avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .member-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .member-role {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .member-bio {
    font-size: 0.9rem;
    color: #444;
  }
  
  .about-values {
    padding: 5rem 2rem;
    background-color: #fff;
  }
  
  .values-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .values-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .value-card {
    background-color: #f9f9f9;
    border-radius: 1rem;
    padding: 2rem;
    transition: transform 0.3s;
  }
  
  .value-card:hover {
    transform: translateY(-10px);
  }
  
  .value-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  .value-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .value-description {
    color: #444;
    line-height: 1.6;
  }
  
  .about-contact {
    padding: 5rem 2rem;
    background-color: #f5f5f5;
  }
  
  .contact-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .contact-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .contact-text {
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 3rem;
  }
  
  .contact-form {
    text-align: left;
    background-color: #fff;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: #333;
  }
  
  .form-submit {
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .form-submit:hover {
    background-color: #555;
  }
  
  @media (max-width: 992px) {
    .mission-container {
      grid-template-columns: 1fr;
    }
    
    .mission-image {
      order: -1;
    }
  }
  
  @media (max-width: 768px) {
    .about-title {
      font-size: 2.5rem;
    }
    
    .mission-title,
    .team-title,
    .values-title,
    .contact-title {
      font-size: 2rem;
    }
  }
  </style>