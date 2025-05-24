import Image from 'next/image';
import './globals.css';
import ExperienceTabs from '@/components/experience';

interface skillStructure {
  name: string,
  imageUrl: string,
  width?: number,
  height?: number,
}

const frontendSkills: skillStructure[] = [
  { name: 'NextJS', imageUrl: '/images/nextjs.png' },
  { name: 'NuxtJS', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png', height: 40 },
  { name: 'VueJS', imageUrl: '/images/vuejs.png', height: 40 },
  { name: 'ReactJS', imageUrl: '/images/reactjs.png', height: 40},
  { name: 'VanillaJS', imageUrl: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Bww_FLJE0RUQhHRMaLrgXg.png', height: 40, width: 80},
  { name: 'jQuery', imageUrl: '/images/jquery.png', height: 40},
  { name: 'CSS', imageUrl: 'https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo-500x281.jpg', height: 40 },
];

const backendSkills: skillStructure[] = [
  { name: 'Node.JS', imageUrl:  '/images/nodejs.png', width: 60, height: 60},
  { name: 'Go', imageUrl:  'https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png', width: 60, height: 60 },
  { name: 'Django', imageUrl:  '/images/django.png', width: 60, height: 60 },
  { name: 'Laravel', imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg', width: 60, height: 60 },
  { name: 'Codeigniter', imageUrl:  'https://cdn.iconscout.com/icon/free/png-512/free-codeigniter-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-language-pack-logos-icons-1175201.png?f=webp&w=256', width: 60, height: 60 },
  { name: 'RabbitMQ', imageUrl:  'https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg', width: 60, height: 60 },
  { name: 'Kafka', imageUrl:  'https://kafka.apache.org/logos/kafka_logo--simple.png', width: 80, height: 60 },
  { name: 'MySQL', imageUrl:  '/images/mysql.png', width: 80, height: 60 },
  { name: 'MongoDB', imageUrl:  '/images/mongodb.png' , width: 60, height: 60},
];

export default function Home() {
  return (
    <div>
      <div className="biodata">
        <div className="profile">
          <h1 className="fullname">
            Vincentius Tri Nugroho Kuswiharto Lolong
          </h1>
          <h2 className="title">Software Engineer</h2>
        </div>
        <div className="photo">
          <Image
            src="https://avatars.githubusercontent.com/u/157680673?v=4"
            alt="Profile Picture"
            width={200}
            height={200}
            className="photo-profile"
          />
        </div>
      </div>
      <div className='introduction-main'>
        <h2>
          Hi,<br />
          I&apos;m Vincent.<br /><br />
          I&apos;m a Software Engineer with experience in building and maintaining large-scale websites and backend systems — and it&apos;s also my hobby!<br />
          I&apos;m known as someone who can do many IT jobs 💻
        </h2>
      </div>

      <h2 className='experience-title'>My Work Experience : </h2>

      <ExperienceTabs />

      <div className="content">
        <div className="skill-main">
          <h2 className="skill-title">Skills</h2>
          <div className="skill-detail">
            <h3 className="backend-main">Backend</h3>
            <div className="skill-list">
              {backendSkills.map((skill: skillStructure) => (
                <div className="skill-name" key={skill.name}>
                  <Image
                    src={skill.imageUrl}
                    alt={skill.name}
                    width={skill.width??80}
                    height={skill.height??20}
                    // className="skill-list-icon"
                  />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
            
            <h3 className="frontend-main">Front End</h3>
            <div className="skill-list">
              {frontendSkills.map((skill: skillStructure) => (
                <div className="skill-name" key={skill.name}>
                  <Image
                    rel="noopener noreferrer"
                    src={skill.imageUrl}
                    alt={skill.name}
                    width={skill.width??80}
                    height={skill.height??20}
                    // className="skill-list-icon"
                  />
                  <h3>{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
