const client = require('./elasticsearch.config');

const seedCourses = async () => {
  const courses = [
    {
      title: 'Introduction to AI',
      description: 'Learn the basics of artificial intelligence.',
      tags: ['AI', 'Machine Learning', 'Beginner'],
      difficulty: 'Beginner',
    },
    {
      title: 'Advanced Data Science',
      description: 'Deep dive into data science techniques.',
      tags: ['Data Science', 'Python', 'Advanced'],
      difficulty: 'Advanced',
    },
    {
      title: 'Deep Learning Fundamentals',
      description: 'Understand neural networks and deep learning concepts.',
      tags: ['Deep Learning', 'Neural Networks', 'Intermediate'],
      difficulty: 'Intermediate',
    },
    {
      title: 'Introduction to Cloud Computing',
      description: 'Learn about cloud platforms like AWS and Azure.',
      tags: ['Cloud', 'AWS', 'Azure'],
      difficulty: 'Beginner',
    },
    {
      title: 'Web Development Bootcamp',
      description: 'A complete guide to building modern web applications.',
      tags: ['Web Development', 'React', 'JavaScript'],
      difficulty: 'Beginner',
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'An introduction to cybersecurity and network security.',
      tags: ['Cybersecurity', 'Networking', 'Security'],
      difficulty: 'Intermediate',
    },
    {
      title: 'Big Data Analytics',
      description: 'Learn how to handle and analyze big data.',
      tags: ['Big Data', 'Hadoop', 'Spark'],
      difficulty: 'Advanced',
    },
    {
      title: 'Blockchain Basics',
      description: 'Understand the fundamentals of blockchain technology.',
      tags: ['Blockchain', 'Cryptocurrency', 'Ethereum'],
      difficulty: 'Intermediate',
    },
    {
      title: 'Robotics for Beginners',
      description: 'Get started with robotics and automation.',
      tags: ['Robotics', 'Automation', 'Beginner'],
      difficulty: 'Beginner',
    },
    {
      title: 'Quantum Computing Overview',
      description: 'Introduction to the principles of quantum computing.',
      tags: ['Quantum Computing', 'Advanced', 'Physics'],
      difficulty: 'Advanced',
    },
  ];

  for (const course of courses) {
    await client.index({
      index: 'courses',
      body: course,
    });
  }
};

const seedStudents = async () => {
  const students = [
    {
      name: 'John Doe',
      interests: ['AI', 'Machine Learning'],
      past_courses: ['Introduction to AI'],
      performance_scores: 85.0,
    },
    {
      name: 'Jane Smith',
      interests: ['Data Science', 'Python'],
      past_courses: ['Advanced Data Science'],
      performance_scores: 92.0,
    },
    {
      name: 'Alice Johnson',
      interests: ['Deep Learning', 'Neural Networks'],
      past_courses: ['Deep Learning Fundamentals'],
      performance_scores: 88.0,
    },
    {
      name: 'Bob Williams',
      interests: ['Cloud Computing', 'AWS'],
      past_courses: ['Introduction to Cloud Computing'],
      performance_scores: 80.0,
    },
    {
      name: 'Emily Davis',
      interests: ['Web Development', 'React'],
      past_courses: ['Web Development Bootcamp'],
      performance_scores: 90.0,
    },
    {
      name: 'Michael Brown',
      interests: ['Cybersecurity', 'Networking'],
      past_courses: ['Cybersecurity Essentials'],
      performance_scores: 84.0,
    },
    {
      name: 'Sophia Wilson',
      interests: ['Big Data', 'Hadoop'],
      past_courses: ['Big Data Analytics'],
      performance_scores: 91.0,
    },
    {
      name: 'Chris Taylor',
      interests: ['Blockchain', 'Cryptocurrency'],
      past_courses: ['Blockchain Basics'],
      performance_scores: 87.0,
    },
    {
      name: 'Olivia Martinez',
      interests: ['Robotics', 'Automation'],
      past_courses: ['Robotics for Beginners'],
      performance_scores: 89.0,
    },
    {
      name: 'Liam Anderson',
      interests: ['Quantum Computing', 'Physics'],
      past_courses: ['Quantum Computing Overview'],
      performance_scores: 93.0,
    },
  ];

  for (const student of students) {
    await client.index({
      index: 'students',
      body: student,
    });
  }
};

const runSeeder = async () => {
  await seedCourses();
  await seedStudents();
  console.log('Data seeded successfully!');
};

runSeeder().catch(console.error);
