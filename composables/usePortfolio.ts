// composables/usePortfolio.ts

// 定义项目类型
export interface PortfolioItem {
  id: number
  title: string
  description: string
  icon: string
  tags: string[]
  status: '最新发布' | '进行中' | '已完成'
  gradient: string
  powerbiUrl: string
  technologies?: Technology[]
}

// 定义技术栈类型
export interface Technology {
  name: string
  description: string
  icon?: string
  iconBg?: string
  iconColor?: string
}

export const usePortfolio = () => {
  // 单一数据源 - 完整的项目数据
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: '上市公司财务报告分析',
      description: '基于PowerBI的财务报表可视化分析，包含资产负债表、利润表、现金流量表等关键指标',
      icon: '📊',
      tags: ['PowerBI', '财务分析', '数据可视化', 'DAX', 'SQL'],
      status: '最新发布',
      gradient: 'from-blue-500 to-cyan-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMWI4MjZmYTItNGQwMS00YjQzLTljMjAtNDJmYWU1Mjg3ZjQ4IiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: 'Power BI',
          description: '数据可视化与分析平台',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        },
        {
          name: 'DAX',
          description: '数据分析表达式语言',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: '数据建模',
          description: '构建关系型数据模型',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-50',
          iconColor: 'text-purple-600'
        },
        {
          name: 'SQL',
          description: '数据查询与处理',
          iconBg: 'bg-gradient-to-br from-orange-100 to-orange-50',
          iconColor: 'text-orange-600'
        }
      ]
    },
    {
      id: 2,
      title: '电商销售仪表板',
      description: '实时监控电商平台销售数据，分析用户行为和销售趋势，支持多维度数据钻取',
      icon: '🛒',
      tags: ['Tableau', '电商分析', '实时数据', '用户行为', '销售预测'],
      status: '已完成',
      gradient: 'from-green-500 to-emerald-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDhiM2I3NWMtODQxYy00YjBiLTkzYmEtNWQ3OTU1ZWE4NTBkIiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: 'Power BI',
          description: '商业智能可视化工具',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        },
        {
          name: '实时数据',
          description: '实时数据流处理',
          iconBg: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
          iconColor: 'text-yellow-600'
        },
        {
          name: '用户行为',
          description: '用户行为轨迹分析',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: '销售分析',
          description: '销售趋势与预测',
          iconBg: 'bg-gradient-to-br from-red-100 to-red-50',
          iconColor: 'text-red-600'
        }
      ]
    },
    {
      id: 3,
      title: '社交媒体舆情分析',
      description: '通过自然语言处理分析社交媒体数据，监控品牌声誉和用户情感，提供智能洞察',
      icon: '💬',
      tags: ['Python', 'NLP', '情感分析', '文本挖掘', '机器学习'],
      status: '进行中',
      gradient: 'from-purple-500 to-pink-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiYmE2NDAwMmMtMjlhNy00YjhhLThiZjMtYjRlNTg0ZDhkZTk3IiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: 'Python',
          description: '编程语言与数据处理',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        },
        {
          name: '自然语言处理',
          description: '文本分析与情感识别',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: '机器学习',
          description: '算法模型训练',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-50',
          iconColor: 'text-purple-600'
        },
        {
          name: '数据采集',
          description: '社交媒体数据获取',
          iconBg: 'bg-gradient-to-br from-orange-100 to-orange-50',
          iconColor: 'text-orange-600'
        }
      ]
    },
    {
      id: 4,
      title: '供应链优化分析',
      description: '分析供应链数据，优化库存管理和物流效率，降低运营成本，提高周转率',
      icon: '🚚',
      tags: ['数据分析', '供应链', '库存优化', '物流管理', '成本控制'],
      status: '进行中',
      gradient: 'from-orange-500 to-red-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZTA5NjczNDItM2JiZC00ZDIyLTgyOGItNWEyNzE4ZmE3ZWViIiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: '供应链分析',
          description: '全链路数据分析',
          iconBg: 'bg-gradient-to-br from-orange-100 to-orange-50',
          iconColor: 'text-orange-600'
        },
        {
          name: '库存管理',
          description: '库存优化与预测',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: '物流优化',
          description: '路径规划与效率提升',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        },
        {
          name: '成本分析',
          description: '成本控制与优化',
          iconBg: 'bg-gradient-to-br from-red-100 to-red-50',
          iconColor: 'text-red-600'
        }
      ]
    },
    {
      id: 5,
      title: '用户行为分析平台',
      description: '跟踪和分析用户在平台上的行为模式，提升用户体验和转化率，优化产品设计',
      icon: '👥',
      tags: ['用户分析', '行为跟踪', 'UX优化', '转化率', '产品分析'],
      status: '进行中',
      gradient: 'from-indigo-500 to-blue-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDI2MzE0ODQtZjQ4NC00MjIxLWIxNGUtNzQwMmQ1M2E1MjA1IiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: '用户行为分析',
          description: '行为路径与转化分析',
          iconBg: 'bg-gradient-to-br from-indigo-100 to-indigo-50',
          iconColor: 'text-indigo-600'
        },
        {
          name: '用户体验',
          description: 'UX优化与可用性测试',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-50',
          iconColor: 'text-purple-600'
        },
        {
          name: '转化率优化',
          description: '转化漏斗分析与优化',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: 'A/B测试',
          description: '实验设计与效果评估',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        }
      ]
    },
    {
      id: 6,
      title: '市场趋势预测模型',
      description: '使用机器学习预测市场趋势和业务指标，提供数据驱动的决策支持，降低投资风险',
      icon: '📈',
      tags: ['机器学习', '预测分析', '时间序列', '风险评估', '数据建模'],
      status: '进行中',
      gradient: 'from-yellow-500 to-orange-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNTE0M2M3ZjctOWY2Ny00ZmUxLWIyNGQtZjc1NGU2YTY5NTE3IiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: '机器学习',
          description: '预测模型与算法',
          iconBg: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
          iconColor: 'text-yellow-600'
        },
        {
          name: '时间序列',
          description: '时序数据分析与预测',
          iconBg: 'bg-gradient-to-br from-orange-100 to-orange-50',
          iconColor: 'text-orange-600'
        },
        {
          name: '风险评估',
          description: '风险识别与量化',
          iconBg: 'bg-gradient-to-br from-red-100 to-red-50',
          iconColor: 'text-red-600'
        },
        {
          name: '数据建模',
          description: '特征工程与模型构建',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-50',
          iconColor: 'text-purple-600'
        }
      ]
    },
    {
      id: 7,
      title: '医疗健康数据分析',
      description: '分析医疗健康数据，提供疾病预测和健康管理建议，支持医疗决策',
      icon: '🏥',
      tags: ['医疗分析', '健康数据', '疾病预测', '数据安全', '可视化'],
      status: '进行中',
      gradient: 'from-teal-500 to-emerald-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZjA1MjQzZDItMjU3ZC00ZmI3LWIxMTItM2Q0NjJhYjE3NzA5IiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: '医疗数据',
          description: '医疗健康数据分析',
          iconBg: 'bg-gradient-to-br from-teal-100 to-teal-50',
          iconColor: 'text-teal-600'
        },
        {
          name: '疾病预测',
          description: '风险预测模型',
          iconBg: 'bg-gradient-to-br from-red-100 to-red-50',
          iconColor: 'text-red-600'
        },
        {
          name: '数据安全',
          description: '隐私保护与安全',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: '健康管理',
          description: '个性化健康建议',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        }
      ]
    },
    {
      id: 8,
      title: '智慧城市交通分析',
      description: '分析城市交通数据，优化交通流量，减少拥堵，提高城市交通效率',
      icon: '🚗',
      tags: ['智慧城市', '交通分析', '实时监控', '路径优化', '大数据'],
      status: '进行中',
      gradient: 'from-gray-500 to-blue-500',
      powerbiUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMzQ1NjQ1MzItOTU0NC00MjU0LTg4MzItYjEyMzQ1Njc4OTAxIiwidCI6IjQ4MDM1NzEzLWVmODAtNDAzOS05ZTQ2LTk5MDI5MGJiN2U5ZiIsImMiOjEwfQ%3D%3D',
      technologies: [
        {
          name: '交通数据',
          description: '实时交通流量分析',
          iconBg: 'bg-gradient-to-br from-gray-100 to-gray-50',
          iconColor: 'text-gray-600'
        },
        {
          name: '路径优化',
          description: '最优路径规划算法',
          iconBg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          iconColor: 'text-blue-600'
        },
        {
          name: '实时监控',
          description: '交通状况实时监控',
          iconBg: 'bg-gradient-to-br from-green-100 to-green-50',
          iconColor: 'text-green-600'
        },
        {
          name: '大数据处理',
          description: '海量数据处理分析',
          iconBg: 'bg-gradient-to-br from-purple-100 to-purple-50',
          iconColor: 'text-purple-600'
        }
      ]
    }
  ]

  // 获取所有项目
  const getAllProjects = (): PortfolioItem[] => portfolioItems

  // 根据ID获取项目 - 现在有明确的类型定义
  const getProjectById = (id: number): PortfolioItem | undefined => {
    return portfolioItems.find(item => item.id === id)
  }

  // 获取默认项目（第一个）
  // 获取默认项目（第一个）- 这里确保不会返回 undefined
  const getDefaultProject = (): PortfolioItem => {
    const defaultProject = portfolioItems[0]
    if (!defaultProject) {
      throw new Error('没有找到任何项目数据')
    }
    return defaultProject
  }

  // 获取项目技术栈
  const getProjectTechnologies = (id: number): Technology[] | undefined => {
    const project = getProjectById(id)
    return project?.technologies
  }

  // 根据标签筛选项目
  const getProjectsByTag = (tag: string): PortfolioItem[] => {
    return portfolioItems.filter(item => item.tags.includes(tag))
  }

  return {
    portfolioItems,
    getAllProjects,
    getProjectById,
    getDefaultProject,
    getProjectTechnologies,
    getProjectsByTag
  }
}