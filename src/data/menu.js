export const MenuDashboard = {
  totalProject: 8,
  teams: {
    hituno: {
      isAdd: false,
      projects: {
        LEDO: {
          repositories: {
            frontEnd: {
              https: 'https://nal.github.com/project/hituno/LEDO.git',
              ssh: 'gitlab@nal.gitlab.com/project/hituno/LEDO.git',
            },
            backEnd: {
              https: 'https://nal.github.com/project/hituno/LEDO.git',
              ssh: 'gitlab@nal.github.com/project/hituno/LEDO.git',
            },
          },
          documents: [
            {
              name: 'Tài liệu hệ thống',
              type: 'folder',
              link: 'https://drive.google.com/',
              files: [
                {
                  name: 'Tài liệu 1.xlsx',
                  type: 'file',
                  link: 'https://drive.google.com/',
                },
                {
                  name: 'Tài liệu 2.xlsx',
                  type: 'file',
                  link: 'https://drive.google.com/',
                },
              ],
              folder: [
                { name: 'Mô tả chung', type: 'folder', folders: [], files: [] },
              ],
            },
            {
              name: 'MasteSchedule',
              link: 'https://drive.google.com/',
              files: [],
              folders: [],
            },
          ],
          members: [
            {
              id: 0,
              link: 'http://nal.user.1',
              name: 'user01',
              email: 'user01@nal.vn',
              type: 'user',
              role: ['user'],
            },
            {
              id: 1,
              link: 'http://nal.user.1',
              name: 'user01',
              email: 'user01@nal.vn',
              type: 'user',
              role: ['user'],
            },
          ],
          chanels: [
            {
              id: 0,
              link: 'http://nal.user.1',
              name: 'Public',
              server: 'nal.vn',
              type: 'user',
              token: '12345',
            },
            {
              id: 1,
              link: 'http://nal.user.1',
              name: 'Chém gió',
              server: 'nal.vn',
              type: 'user',
              token: ['12345'],
            },
            {
              id: 1,
              link: 'http://nal.user.1',
              name: 'LEDO',
              server: 'nal.vn',
              type: 'user',
              token: ['12345'],
            },
          ],
          extensions: {
            repositories: [],
            documents: [],
            members: [],
            chanels: [{ name: 'bot_alert', description: 'bot add chanel' }],
          },
        },
        Licorice: {
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
        LEDO1: {
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
        LEDO2: {
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
        AddNewProject: {
          isAdd: true,
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
      },
    },
    matcha: {
      isAdd: false,
      projects: {
        a: {
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
        b: {
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
        AddNewProject: {
          isAdd: true,
          repositories: {},
          documents: [{}],
          members: [{}],
          chanels: [{}],
        },
      },
    },
    AddNewTeam: {
      isAdd: true,
      type: 'add',
      projects: {},
    },
  },
}
