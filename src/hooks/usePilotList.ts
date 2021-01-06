import { Pilot } from '@/interfaces'
// import {useData} from './useData'

const initialData = [
    {
      _id: '5f3a3c5faa55d5c4ea549ac1',
      picture: 'https://i.pravatar.cc/64',
      age: 38,
      name: 'Padilla Adkins',
      team: 'EURON',
      races: [
        {
          name: 'Race 0',
          time: '1:11:39.515'
        },
        {
          name: 'Race 1',
          time: '1:17:24.312'
        },
        {
          name: 'Race 2',
          time: '1:22:29.376'
        },
        {
          name: 'Race 3',
          time: '1:10:34.491'
        },
        {
          name: 'Race 4',
          time: '1:51:45.103'
        },
        {
          name: 'Race 5',
          time: '1:44:16.158'
        },
        {
          name: 'Race 6',
          time: '1:30:14.658'
        },
        {
          name: 'Race 7',
          time: '1:29:41.505'
        },
        {
          name: 'Race 8',
          time: '1:47:52.109'
        },
        {
          name: 'Race 9',
          time: '1:23:38.271'
        }
      ]
    },
    {
      _id: '5f3a3c5f4984bd9be6a6f655',
      picture: 'https://i.pravatar.cc/64',
      age: 39,
      name: 'Richards Floyd',
      team: 'VENDBLEND',
      races: [
        {
          name: 'Race 0',
          time: '1:16:53.224'
        },
        {
          name: 'Race 1',
          time: '1:31:32.533'
        },
        {
          name: 'Race 2',
          time: '1:26:56.186'
        },
        {
          name: 'Race 3',
          time: '1:0:15.169'
        },
        {
          name: 'Race 4',
          time: '1:21:5.428'
        },
        {
          name: 'Race 5',
          time: '1:26:18.202'
        },
        {
          name: 'Race 6',
          time: '1:22:24.379'
        },
        {
          name: 'Race 7',
          time: '1:22:9.316'
        },
        {
          name: 'Race 8',
          time: '1:28:6.268'
        },
        {
          name: 'Race 9',
          time: '1:57:56.461'
        }
      ]
    },
    {
      _id: '5f3a3c5fc4c1a2c2dd9df702',
      picture: 'https://i.pravatar.cc/64',
      age: 39,
      name: 'Jewel Mcdaniel',
      team: 'GENESYNK',
      races: [
        {
          name: 'Race 0',
          time: '1:4:42.549'
        },
        {
          name: 'Race 1',
          time: '1:53:19.849'
        },
        {
          name: 'Race 2',
          time: '1:51:25.667'
        },
        {
          name: 'Race 3',
          time: '1:58:26.847'
        },
        {
          name: 'Race 4',
          time: '1:47:42.841'
        },
        {
          name: 'Race 5',
          time: '1:51:24.73'
        },
        {
          name: 'Race 6',
          time: '1:4:0.075'
        },
        {
          name: 'Race 7',
          time: '1:52:40.457'
        },
        {
          name: 'Race 8',
          time: '1:18:17.738'
        },
        {
          name: 'Race 9',
          time: '1:37:35.128'
        }
      ]
    },
    {
      _id: '5f3a3c5f8a23c3e2c85cab74',
      picture: 'https://i.pravatar.cc/64',
      age: 21,
      name: 'Welch Mays',
      team: 'UXMOX',
      races: [
        {
          name: 'Race 0',
          time: '1:21:48.956'
        },
        {
          name: 'Race 1',
          time: '1:0:56.521'
        },
        {
          name: 'Race 2',
          time: '1:53:9.793'
        },
        {
          name: 'Race 3',
          time: '1:51:15.265'
        },
        {
          name: 'Race 4',
          time: '1:59:43.968'
        },
        {
          name: 'Race 5',
          time: '1:31:27.167'
        },
        {
          name: 'Race 6',
          time: '1:59:49.156'
        },
        {
          name: 'Race 7',
          time: '1:18:49.836'
        },
        {
          name: 'Race 8',
          time: '1:47:46.692'
        },
        {
          name: 'Race 9',
          time: '1:10:57.173'
        }
      ]
    },
    {
      _id: '5f3a3c5f355a5be1fb74076a',
      picture: 'https://i.pravatar.cc/64',
      age: 28,
      name: 'Lilian Levine',
      team: 'UXMOX',
      races: [
        {
          name: 'Race 0',
          time: '1:48:32.99'
        },
        {
          name: 'Race 1',
          time: '1:1:41.043'
        },
        {
          name: 'Race 2',
          time: '1:22:57.229'
        },
        {
          name: 'Race 3',
          time: '1:4:40.618'
        },
        {
          name: 'Race 4',
          time: '1:43:28.734'
        },
        {
          name: 'Race 5',
          time: '1:59:19.861'
        },
        {
          name: 'Race 6',
          time: '1:16:19.976'
        },
        {
          name: 'Race 7',
          time: '1:28:39.612'
        },
        {
          name: 'Race 8',
          time: '1:23:2.596'
        },
        {
          name: 'Race 9',
          time: '1:38:32.305'
        }
      ]
    },
    {
      _id: '5f3a3c5fc42b87fc0d6e31a9',
      picture: 'https://i.pravatar.cc/64',
      age: 27,
      name: 'Harmon Mills',
      team: 'GENESYNK',
      races: [
        {
          name: 'Race 0',
          time: '1:38:45.622'
        },
        {
          name: 'Race 1',
          time: '1:11:14.969'
        },
        {
          name: 'Race 2',
          time: '1:46:46.861'
        },
        {
          name: 'Race 3',
          time: '1:44:18.84'
        },
        {
          name: 'Race 4',
          time: '1:42:3.761'
        },
        {
          name: 'Race 5',
          time: '1:25:17.811'
        },
        {
          name: 'Race 6',
          time: '1:12:57.672'
        },
        {
          name: 'Race 7',
          time: '1:55:48.879'
        },
        {
          name: 'Race 8',
          time: '1:34:55.445'
        },
        {
          name: 'Race 9',
          time: '1:58:25.125'
        }
      ]
    },
    {
      _id: '5f3a3c5f86cbcda872a8f1ed',
      picture: 'https://i.pravatar.cc/64',
      age: 24,
      name: 'Olsen Donaldson',
      team: 'DEVAWAY',
      races: [
        {
          name: 'Race 0',
          time: '1:26:39.47'
        },
        {
          name: 'Race 1',
          time: '1:8:11.491'
        },
        {
          name: 'Race 2',
          time: '1:50:5.416'
        },
        {
          name: 'Race 3',
          time: '1:48:56.726'
        },
        {
          name: 'Race 4',
          time: '1:17:8.218'
        },
        {
          name: 'Race 5',
          time: '1:26:42.32'
        },
        {
          name: 'Race 6',
          time: '1:55:43.729'
        },
        {
          name: 'Race 7',
          time: '1:6:13.931'
        },
        {
          name: 'Race 8',
          time: '1:48:25.087'
        },
        {
          name: 'Race 9',
          time: '1:52:38.604'
        }
      ]
    },
    {
      _id: '5f3a3c5f65e328c1a1263781',
      picture: 'https://i.pravatar.cc/64',
      age: 29,
      name: 'Anne Johnston',
      team: 'DEVAWAY',
      races: [
        {
          name: 'Race 0',
          time: '1:46:20.667'
        },
        {
          name: 'Race 1',
          time: '1:25:48.31'
        },
        {
          name: 'Race 2',
          time: '1:0:26.598'
        },
        {
          name: 'Race 3',
          time: '1:40:54.377'
        },
        {
          name: 'Race 4',
          time: '1:53:38.533'
        },
        {
          name: 'Race 5',
          time: '1:27:11.601'
        },
        {
          name: 'Race 6',
          time: '1:20:27.344'
        },
        {
          name: 'Race 7',
          time: '1:48:58.123'
        },
        {
          name: 'Race 8',
          time: '1:56:35.634'
        },
        {
          name: 'Race 9',
          time: '1:47:46.822'
        }
      ]
    },
    {
      _id: '5f3a3c5fde8d2bb91cab3352',
      picture: 'https://i.pravatar.cc/64',
      age: 31,
      name: 'Cherie Fitzgerald',
      team: 'EURON',
      races: [
        {
          name: 'Race 0',
          time: '1:46:21.421'
        },
        {
          name: 'Race 1',
          time: '1:43:5.956'
        },
        {
          name: 'Race 2',
          time: '1:27:27.411'
        },
        {
          name: 'Race 3',
          time: '1:32:43.108'
        },
        {
          name: 'Race 4',
          time: '1:51:21.313'
        },
        {
          name: 'Race 5',
          time: '1:23:48.083'
        },
        {
          name: 'Race 6',
          time: '1:6:0.916'
        },
        {
          name: 'Race 7',
          time: '1:57:54.609'
        },
        {
          name: 'Race 8',
          time: '1:54:32.003'
        },
        {
          name: 'Race 9',
          time: '1:31:15.369'
        }
      ]
    },
    {
      _id: '5f3a3c5f5a4ce67633e028ad',
      picture: 'https://i.pravatar.cc/64',
      age: 29,
      name: 'Debora Sears',
      team: 'GENESYNK',
      races: [
        {
          name: 'Race 0',
          time: '1:16:52.691'
        },
        {
          name: 'Race 1',
          time: '1:20:32.393'
        },
        {
          name: 'Race 2',
          time: '1:35:38.871'
        },
        {
          name: 'Race 3',
          time: '1:35:16.146'
        },
        {
          name: 'Race 4',
          time: '1:41:49.539'
        },
        {
          name: 'Race 5',
          time: '1:57:46.918'
        },
        {
          name: 'Race 6',
          time: '1:12:47.641'
        },
        {
          name: 'Race 7',
          time: '1:55:52.599'
        },
        {
          name: 'Race 8',
          time: '1:26:36.246'
        },
        {
          name: 'Race 9',
          time: '1:22:26.748'
        }
      ]
    },
    {
      _id: '5f3a3c5f0e202f4a527bf502',
      picture: 'https://i.pravatar.cc/64',
      age: 27,
      name: 'Morris Combs',
      team: 'EURON',
      races: [
        {
          name: 'Race 0',
          time: '1:47:3.23'
        },
        {
          name: 'Race 1',
          time: '1:28:54.578'
        },
        {
          name: 'Race 2',
          time: '1:40:5.387'
        },
        {
          name: 'Race 3',
          time: '1:28:49.392'
        },
        {
          name: 'Race 4',
          time: '1:47:18.89'
        },
        {
          name: 'Race 5',
          time: '1:11:2.444'
        },
        {
          name: 'Race 6',
          time: '1:22:29.818'
        },
        {
          name: 'Race 7',
          time: '1:4:24.429'
        },
        {
          name: 'Race 8',
          time: '1:14:15.846'
        },
        {
          name: 'Race 9',
          time: '1:39:5.08'
        }
      ]
    },
    {
      _id: '5f3a3c5ff1c5e552442b292d',
      picture: 'https://i.pravatar.cc/64',
      age: 29,
      name: 'Naomi Rutledge',
      team: 'VENDBLEND',
      races: [
        {
          name: 'Race 0',
          time: '1:44:36.643'
        },
        {
          name: 'Race 1',
          time: '1:15:9.451'
        },
        {
          name: 'Race 2',
          time: '1:50:37.69'
        },
        {
          name: 'Race 3',
          time: '1:8:31.728'
        },
        {
          name: 'Race 4',
          time: '1:32:50.154'
        },
        {
          name: 'Race 5',
          time: '1:51:22.663'
        },
        {
          name: 'Race 6',
          time: '1:30:35.122'
        },
        {
          name: 'Race 7',
          time: '1:17:25.795'
        },
        {
          name: 'Race 8',
          time: '1:36:56.224'
        },
        {
          name: 'Race 9',
          time: '1:32:52.749'
        }
      ]
    },
    {
      _id: '5f3a3c5f086b43d06ac5a984',
      picture: 'https://i.pravatar.cc/64',
      age: 35,
      name: 'Guerra Rosario',
      team: 'DEVAWAY',
      races: [
        {
          name: 'Race 0',
          time: '1:22:53.242'
        },
        {
          name: 'Race 1',
          time: '1:54:8.187'
        },
        {
          name: 'Race 2',
          time: '1:1:5.747'
        },
        {
          name: 'Race 3',
          time: '1:44:13.98'
        },
        {
          name: 'Race 4',
          time: '1:30:28.754'
        },
        {
          name: 'Race 5',
          time: '1:13:14.073'
        },
        {
          name: 'Race 6',
          time: '1:41:58.781'
        },
        {
          name: 'Race 7',
          time: '1:8:10.042'
        },
        {
          name: 'Race 8',
          time: '1:54:42.966'
        },
        {
          name: 'Race 9',
          time: '1:58:35.652'
        }
      ]
    },
    {
      _id: '5f3a3c5f2744fa89349fe0f3',
      picture: 'https://i.pravatar.cc/64',
      age: 34,
      name: 'Nguyen Fletcher',
      team: 'GENESYNK',
      races: [
        {
          name: 'Race 0',
          time: '1:8:15.559'
        },
        {
          name: 'Race 1',
          time: '1:50:21.71'
        },
        {
          name: 'Race 2',
          time: '1:4:55.952'
        },
        {
          name: 'Race 3',
          time: '1:34:18.34'
        },
        {
          name: 'Race 4',
          time: '1:59:9.568'
        },
        {
          name: 'Race 5',
          time: '1:59:42.241'
        },
        {
          name: 'Race 6',
          time: '1:46:33.387'
        },
        {
          name: 'Race 7',
          time: '1:55:49.791'
        },
        {
          name: 'Race 8',
          time: '1:29:4.4'
        },
        {
          name: 'Race 9',
          time: '1:45:37.349'
        }
      ]
    },
    {
      _id: '5f3a3c5f970bc40e21b8ee63',
      picture: 'https://i.pravatar.cc/64',
      age: 27,
      name: 'Lisa Montoya',
      team: 'GENESYNK',
      races: [
        {
          name: 'Race 0',
          time: '1:19:38.374'
        },
        {
          name: 'Race 1',
          time: '1:52:42.372'
        },
        {
          name: 'Race 2',
          time: '1:59:9.399'
        },
        {
          name: 'Race 3',
          time: '1:33:33.531'
        },
        {
          name: 'Race 4',
          time: '1:15:15.002'
        },
        {
          name: 'Race 5',
          time: '1:12:1.19'
        },
        {
          name: 'Race 6',
          time: '1:56:48.602'
        },
        {
          name: 'Race 7',
          time: '1:49:20.073'
        },
        {
          name: 'Race 8',
          time: '1:53:21.555'
        },
        {
          name: 'Race 9',
          time: '1:40:52.086'
        }
      ]
    },
    {
      _id: '5f3a3c5f0a5f78c603fc1d14',
      picture: 'https://i.pravatar.cc/64',
      age: 30,
      name: 'Misty Marsh',
      team: 'UXMOX',
      races: [
        {
          name: 'Race 0',
          time: '1:39:54.655'
        },
        {
          name: 'Race 1',
          time: '1:26:8.059'
        },
        {
          name: 'Race 2',
          time: '1:23:11.046'
        },
        {
          name: 'Race 3',
          time: '1:41:4.32'
        },
        {
          name: 'Race 4',
          time: '1:9:53.404'
        },
        {
          name: 'Race 5',
          time: '1:13:42.517'
        },
        {
          name: 'Race 6',
          time: '1:48:18.026'
        },
        {
          name: 'Race 7',
          time: '1:55:3.198'
        },
        {
          name: 'Race 8',
          time: '1:19:46.733'
        },
        {
          name: 'Race 9',
          time: '1:40:17.202'
        }
      ]
    },
    {
      _id: '5f3a3c5f876488cda4de309a',
      picture: 'https://i.pravatar.cc/64',
      age: 32,
      name: 'Stanton Ayala',
      team: 'CONFRENZY',
      races: [
        {
          name: 'Race 0',
          time: '1:10:20.58'
        },
        {
          name: 'Race 1',
          time: '1:53:44.181'
        },
        {
          name: 'Race 2',
          time: '1:5:18.992'
        },
        {
          name: 'Race 3',
          time: '1:47:55.459'
        },
        {
          name: 'Race 4',
          time: '1:49:31.585'
        },
        {
          name: 'Race 5',
          time: '1:38:20.841'
        },
        {
          name: 'Race 6',
          time: '1:48:19.814'
        },
        {
          name: 'Race 7',
          time: '1:36:18.023'
        },
        {
          name: 'Race 8',
          time: '1:31:21.812'
        },
        {
          name: 'Race 9',
          time: '1:48:26.514'
        }
      ]
    },
    {
      _id: '5f3a3c5f8bd0087dc1b70b77',
      picture: 'https://i.pravatar.cc/64',
      age: 39,
      name: 'Gilda Lindsay',
      team: 'UXMOX',
      races: [
        {
          name: 'Race 0',
          time: '1:53:0.702'
        },
        {
          name: 'Race 1',
          time: '1:28:42.037'
        },
        {
          name: 'Race 2',
          time: '1:53:24.687'
        },
        {
          name: 'Race 3',
          time: '1:38:10.498'
        },
        {
          name: 'Race 4',
          time: '1:46:58.467'
        },
        {
          name: 'Race 5',
          time: '1:21:51.764'
        },
        {
          name: 'Race 6',
          time: '1:2:8.072'
        },
        {
          name: 'Race 7',
          time: '1:26:54.026'
        },
        {
          name: 'Race 8',
          time: '1:56:31.087'
        },
        {
          name: 'Race 9',
          time: '1:56:5.192'
        }
      ]
    },
    {
      _id: '5f3a3c5f8df3fe2e8c6ae477',
      picture: 'https://i.pravatar.cc/64',
      age: 29,
      name: 'Daniels Manning',
      team: 'CONFRENZY',
      races: [
        {
          name: 'Race 0',
          time: '1:0:57.037'
        },
        {
          name: 'Race 1',
          time: '1:19:21.263'
        },
        {
          name: 'Race 2',
          time: '1:16:58.378'
        },
        {
          name: 'Race 3',
          time: '1:21:1.485'
        },
        {
          name: 'Race 4',
          time: '1:16:2.04'
        },
        {
          name: 'Race 5',
          time: '1:50:30.417'
        },
        {
          name: 'Race 6',
          time: '1:54:33.324'
        },
        {
          name: 'Race 7',
          time: '1:15:45.267'
        },
        {
          name: 'Race 8',
          time: '1:2:42.528'
        },
        {
          name: 'Race 9',
          time: '1:24:7.128'
        }
      ]
    },
    {
      _id: '5f3a3c5f0c713e786503e798',
      picture: 'https://i.pravatar.cc/64',
      age: 39,
      name: 'Howe Gaines',
      team: 'VENDBLEND',
      races: [
        {
          name: 'Race 0',
          time: '1:47:32.432'
        },
        {
          name: 'Race 1',
          time: '1:40:12.872'
        },
        {
          name: 'Race 2',
          time: '1:44:7.808'
        },
        {
          name: 'Race 3',
          time: '1:47:10.399'
        },
        {
          name: 'Race 4',
          time: '1:16:48.487'
        },
        {
          name: 'Race 5',
          time: '1:35:58.714'
        },
        {
          name: 'Race 6',
          time: '1:9:2.596'
        },
        {
          name: 'Race 7',
          time: '1:58:10.066'
        },
        {
          name: 'Race 8',
          time: '1:10:34.986'
        },
        {
          name: 'Race 9',
          time: '1:11:36.368'
        }
      ]
    },
    {
      _id: '5f3a3c5f37ce779261434517',
      picture: 'https://i.pravatar.cc/64',
      age: 24,
      name: 'Hillary Leonard',
      team: 'CONFRENZY',
      races: [
        {
          name: 'Race 0',
          time: '1:48:28.477'
        },
        {
          name: 'Race 1',
          time: '1:37:16.852'
        },
        {
          name: 'Race 2',
          time: '1:7:36.766'
        },
        {
          name: 'Race 3',
          time: '1:54:50.18'
        },
        {
          name: 'Race 4',
          time: '1:11:35.705'
        },
        {
          name: 'Race 5',
          time: '1:1:52.361'
        },
        {
          name: 'Race 6',
          time: '1:15:58.031'
        },
        {
          name: 'Race 7',
          time: '1:49:1.957'
        },
        {
          name: 'Race 8',
          time: '1:50:46.778'
        },
        {
          name: 'Race 9',
          time: '1:2:21.754'
        }
      ]
    },
    {
      _id: '5f3a3c5fdc6f6738e4f35dd7',
      picture: 'https://i.pravatar.cc/64',
      age: 32,
      name: 'Reva French',
      team: 'GENESYNK',
      races: [
        {
          name: 'Race 0',
          time: '1:53:36.228'
        },
        {
          name: 'Race 1',
          time: '1:59:58.061'
        },
        {
          name: 'Race 2',
          time: '1:27:19.038'
        },
        {
          name: 'Race 3',
          time: '1:0:6.003'
        },
        {
          name: 'Race 4',
          time: '1:6:38.885'
        },
        {
          name: 'Race 5',
          time: '1:50:42.074'
        },
        {
          name: 'Race 6',
          time: '1:42:55.71'
        },
        {
          name: 'Race 7',
          time: '1:38:16.095'
        },
        {
          name: 'Race 8',
          time: '1:56:0.979'
        },
        {
          name: 'Race 9',
          time: '1:29:18.093'
        }
      ]
    }
  ];
  
export const usePilotList = ()=>{
    
    const pilots: Pilot[] = [];

    for (const pilot of initialData) {
      pilots.push({
        _id: pilot._id,
        name: pilot.name,
        age: pilot.age,
        team: pilot.team,
        picture: pilot.picture,
      })
    }

    return {pilots}
  
  
}