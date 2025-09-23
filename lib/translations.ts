export type Language = 'en' | 'ja' | 'vi'

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
]

export const translations = {
  en: {
    nav: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      blog: 'Blog',
      philosophy: 'Philosophy',
      contact: 'Contact',
    },
    hero: {
      name: 'Son Duc Cao',
      title: 'Back-end Software Engineer',
      description: 'Back-end Software Engineer with 3.5 years of experience in designing and developing database-centric applications; skilled in web-based architectures, databases, and search systems.',
      cv: 'CV (PDF)',
      techStack: 'PHP · Golang · PySpark · AWS · OpenSearch · BigQuery',
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Expertise spanning backend development, search technologies, and cloud infrastructure',
      categories: {
        languages: 'Programming Languages',
        backend: 'Backend & Databases',
        search: 'Search & Analytics',
        infrastructure: 'Infrastructure & Tools',
      },
      items: {
        languages: ['PHP', 'Golang', 'PySpark', 'Python'],
        backend: ['PostgreSQL', 'MySQL', 'BigQuery', 'RabbitMQ'],
        search: ['AWS OpenSearch', 'ElasticSearch', 'Google Analytics 4', 'New Relic'],
        infrastructure: ['AWS EC2', 'AWS Lambda', 'AWS Glue', 'AWS EventBridge', 'AWS CodePipeline', 'ECS', 'Amazon S3', 'Terraform', 'Github Actions']
      },
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Highlighting key projects that demonstrate my backend engineering expertise',
      viewCode: 'Code',
      viewDemo: 'Demo',
      project1: {
        title: 'PR TIMES Search System Migration',
        description: 'Redesigned and migrated on-premise ElasticSearch to AWS OpenSearch with zero downtime. Reduced search latency by 40% and increased throughput by 2x while eliminating 12-hour daily index rebuild.',
        technologies: ['PHP', 'AWS OpenSearch', 'PostgreSQL', 'AWS EC2', 'RabbitMQ', 'BigQuery'],
        blogUrl: 'https://developers.prtimes.jp/2022/12/21/zero-downtime-migration-from-self-managed-elasticsearch-to-aws-opensearch/'
      },
      project2: {
        title: 'PR TIMES Ranking & Analytics Enhancement',
        description: 'Solo project redesigning ranking system using CDN access log aggregation. Expanded ranking boards from 6 to 55 and resolved data consistency issues while reducing system load.',
        technologies: ['Golang', 'PHP', 'AWS Lambda', 'AWS EventBridge', 'PostgreSQL'],
        blogUrl: 'https://developers.prtimes.jp/2023/12/14/solving-performance-issues-in-pr-timess-press-release-logging/'
      },
      project3: {
        title: 'Data Warehouse & ETL Pipeline',
        description: 'Constructed ETL foundation from PR TIMES monolithic databases and Google Analytics 4 to BigQuery, enabling advanced analytics capabilities for internal and external use.',
        technologies: ['PySpark', 'AWS Glue', 'Amazon S3', 'BigQuery', 'PostgreSQL', 'Google Analytics 4'],
        blogUrls: [
          'https://developers.prtimes.jp/2021/08/17/google-analytics_bigquery/',
          'https://developers.prtimes.jp/2021/11/29/awsglue_etl/'
        ]
      },
    },
    experience: {
      title: 'Work Experience',
      subtitle: 'Building robust backend systems and search infrastructure',
      current: 'Current',
      job1: {
        company: 'PR TIMES Inc.',
        role: 'Software Engineer',
        period: 'Oct 2020 – Present',
        location: 'Tokyo, Japan',
        description: 'Leading multiple critical projects at PR TIMES, a major press release distribution platform.',
        projects: [
          {
            title: 'PR TIMES Search Team Lead/Member',
            period: 'Jun 2022 - Present',
            highlights: [
              'Redesigned and replaced on-premise ElasticSearch to AWS OpenSearch with zero downtime',
              'Reduced search latency by 40% and increased throughput by 2x',
              'Eliminated daily 12-hour index rebuild, reducing to 3 hours',
              'Developing new search features and providing analytics'
            ],
            technologies: ['PHP', 'AWS EC2', 'RabbitMQ', 'BigQuery', 'AWS OpenSearch', 'PostgreSQL', 'Google Analytics 4', 'New Relic'],
            blogUrl: 'https://developers.prtimes.jp/2022/12/21/zero-downtime-migration-from-self-managed-elasticsearch-to-aws-opensearch/'
          },
          {
            title: 'PR TIMES Ranking & Analysis Replacement (Solo)',
            period: 'Feb 2023 - Dec 2023',
            highlights: [
              'Innovated data collection using CDN access log aggregation approach',
              'Expanded ranking boards from 6 to 55, enhancing measurement capabilities',
              'Resolved data inconsistency issues in the Ranking System',
              'Reduced system load and improved analytics algorithm precision'
            ],
            technologies: ['Golang', 'PHP', 'AWS Lambda', 'AWS EventBridge', 'PostgreSQL'],
            blogUrl: 'https://developers.prtimes.jp/2023/12/14/solving-performance-issues-in-pr-timess-press-release-logging/'
          },
          {
            title: 'WebClipping in PR TIMES Beta',
            period: 'Nov 2021 - Apr 2022',
            highlights: [
              'Contributed to automated web article collection and analysis service',
              'Managed infrastructure tasks with outsource company',
              'Optimized deployment processes and staging infrastructure'
            ],
            technologies: ['PHP', 'MySQL', 'Github Actions', 'AWS CodePipeline', 'ECS']
          },
          {
            title: 'Data Warehouse & ETL Pipeline (Solo)',
            period: 'May 2021 - Oct 2021',
            highlights: [
              'Constructed ETL foundation from monolithic databases to BigQuery',
              'Utilized BigQuery for analytics supporting internal and external needs',
              'Built data pipeline from Google Analytics 4 integration'
            ],
            technologies: ['PySpark', 'AWS Glue', 'Amazon S3', 'BigQuery', 'PostgreSQL', 'Google Analytics 4'],
            blogUrls: [
              'https://developers.prtimes.jp/2021/08/17/google-analytics_bigquery/',
              'https://developers.prtimes.jp/2021/11/29/awsglue_etl/'
            ]
          }
        ]
      },
    },
    blog: {
      title: 'Recent Articles',
      subtitle: 'Thoughts on backend development and distributed systems',
      readMore: 'Read more →',
      post1: {
        title: 'Zero Downtime Migration from self-managed Elasticsearch to AWS OpenSearch at PR TIMES',
        excerpt: 'Complete guide to migrating ElasticSearch to AWS OpenSearch with zero downtime, achieving 40% latency reduction and 2x throughput improvement.',
        date: 'Dec 21, 2022',
        url: 'https://developers.prtimes.jp/2022/12/21/zero-downtime-migration-from-self-managed-elasticsearch-to-aws-opensearch/',
      },
      post2: {
        title: 'Solving Performance Issues in PR TIMES\'s Press Release Logging',
        excerpt: 'How we redesigned ranking systems using CDN access logs, expanding from 6 to 55 ranking boards while improving data consistency and solving performance issues.',
        date: 'Dec 14, 2023',
        url: 'https://developers.prtimes.jp/2023/12/14/solving-performance-issues-in-pr-timess-press-release-logging/',
      },
      post3: {
        title: 'AWS Glueを活用してETLを実装する',
        excerpt: 'Implementing ETL processes using AWS Glue for data pipeline construction from monolithic databases to BigQuery.',
        date: 'Nov 29, 2021',
        url: 'https://developers.prtimes.jp/2021/11/29/awsglue_etl/',
      },
      post4: {
        title: 'Google AnalyticsとBigQueryを連携して高速柔軟な集計を可能に',
        excerpt: 'Integrating Google Analytics with BigQuery to enable fast and flexible data aggregation for analytics.',
        date: 'Aug 17, 2021',
        url: 'https://developers.prtimes.jp/2021/08/17/google-analytics_bigquery/',
      },
    },
    philosophy: {
      title: 'Engineering Philosophy',
      subtitle: 'Principles that guide my approach to backend development',
      principle1: {
        title: 'Performance First',
        description: 'Every millisecond counts. I optimize for speed and efficiency from the ground up.',
      },
      principle2: {
        title: 'Scalable Architecture',
        description: 'Build systems that grow gracefully with demand, not just for today\'s requirements.',
      },
      principle3: {
        title: 'Developer Experience',
        description: 'Clean APIs and comprehensive documentation make collaboration seamless.',
      },
      principle4: {
        title: 'Data-Driven Decisions',
        description: 'Metrics and monitoring guide optimization efforts and validate improvements.',
      },
    },
    certifications: {
      title: 'Certifications & Awards',
      subtitle: 'Professional certifications and recognition',
      certifications: [
        'AWS Certified Developer – Associate (June 2023)',
        'AWS Certified SysOps Administrator – Associate (May 2023)',
        'AWS Certified Solutions Architect – Associate (Mar 2023)',
        'Fundamentals of Engineering (基本情報技術者資格) - Dec 2019',
        'Japanese Language Proficiency N2 (日本語能力試験N2) - Aug 2019'
      ],
      awards: [
        'All Professional 2022 (Team Award) - PR TIMES Inc.',
        'Rookie of the Year 2021 (Individual Award) - PR TIMES Inc.'
      ],
      education: {
        degree: 'Bachelor of Information Technology',
        school: 'University of Danang, Danang University of Science and Technology, Vietnam',
        period: '2015–2020'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Interested in collaborating or discussing backend engineering opportunities? Let\'s connect.',
      info: 'Contact Information',
      location: 'Tokyo, Japan',
      openTo: 'Currently Open To:',
      openToItems: [
        'Backend engineering opportunities',
        'Technical consulting projects',
        'Open source collaborations'
      ],
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
      },
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      skills: 'スキル',
      projects: 'プロジェクト',
      experience: '経験',
      blog: 'ブログ',
      philosophy: '哲学',
      contact: 'お問い合わせ',
    },
    hero: {
      name: 'カオ・ソン・ドゥック',
      title: 'バックエンドエンジニア',
      description: 'Golang、PHP、AWSを使用してスケーラブルで高性能なバックエンドシステムを構築しています。検索技術と分散システムに情熱を持っています。',
      cv: '履歴書 (PDF)',
      techStack: 'Golang · PHP · AWS · OpenSearch',
    },
    skills: {
      title: '技術スキル',
      subtitle: 'バックエンド開発、検索技術、クラウドインフラストラクチャにわたる専門知識',
      categories: {
        languages: 'プログラミング言語',
        backend: 'バックエンド＆データベース',
        search: '検索技術',
        infrastructure: 'インフラストラクチャ＆ツール',
      },
    },
    projects: {
      title: '主要プロジェクト',
      subtitle: 'バックエンドエンジニアリングの専門知識を示す主要プロジェクト',
      viewCode: 'コード',
      viewDemo: 'デモ',
      project1: {
        title: 'Reddit風SNSプラットフォーム',
        description: 'GolangとPostgreSQLを使用して、リアルタイム機能、ユーザー認証、コンテンツ管理を備えたスケーラブルなソーシャルネットワーキングサービスを構築しました。',
      },
      project2: {
        title: 'OpenSearch エンジン最適化',
        description: 'クエリ応答時間を40％高速化し、プレスリリース配信のための関連性スコアリングを向上させる検索パフォーマンスの改善を主導しました。',
      },
      project3: {
        title: 'Terraform AWS インフラストラクチャ',
        description: 'Fastly CDN統合と自動スケーリングを備えたマルチ環境デプロイメント用のInfrastructure as Codeを設計・実装しました。',
      },
    },
    experience: {
      title: '職歴',
      subtitle: '堅牢なバックエンドシステムと検索インフラストラクチャの構築',
      current: '現在',
      job1: {
        company: 'freee株式会社',
        role: 'バックエンドエンジニア',
        description: 'フィンテックアプリケーションのバックエンド開発をリードし、パフォーマンスの最適化とシステムの信頼性に注力しています。',
        highlights: [
          '1日10万件以上のトランザクションを処理するマイクロサービスを設計',
          'キャッシング戦略によりAPIレスポンス時間を40％短縮',
          '堅牢なエラー処理と監視システムを実装'
        ],
      },
      job2: {
        company: 'PR TIMES',
        role: '検索エンジニア',
        description: 'プレスリリース配信プラットフォームの検索インフラストラクチャと最適化に特化しています。',
        highlights: [
          'OpenSearchクエリを最適化し、レイテンシを50％削減',
          'より良い検索結果のための関連性スコアリングアルゴリズムを設計',
          '即座のコンテンツ可用性のためのリアルタイムインデックスパイプラインを構築'
        ],
      },
    },
    blog: {
      title: '最近の記事',
      subtitle: 'バックエンド開発と分散システムについての考察',
      readMore: '続きを読む →',
      post1: {
        title: '高トラフィックアプリケーション向けOpenSearchの最適化',
        excerpt: '本番環境で検索パフォーマンスを40％向上させたクエリ最適化技術とインデックス戦略の詳細。',
        date: '2024年3月15日',
      },
      post2: {
        title: 'Golangでスケーラブルなマイクロサービスを構築',
        excerpt: '毎日数百万のリクエストを処理するマイクロサービスプラットフォームの設計から学んだ教訓。',
        date: '2024年2月28日',
      },
      post3: {
        title: 'TerraformによるInfrastructure as Code',
        excerpt: 'TerraformとGitOpsを使用したマルチ環境AWSインフラストラクチャ管理のベストプラクティス。',
        date: '2024年1月10日',
      },
    },
    philosophy: {
      title: 'エンジニアリング哲学',
      subtitle: 'バックエンド開発へのアプローチを導く原則',
      principle1: {
        title: 'パフォーマンス第一',
        description: 'すべてのミリ秒が重要です。最初から速度と効率性を最適化します。',
      },
      principle2: {
        title: 'スケーラブルアーキテクチャ',
        description: '今日の要件だけでなく、需要に応じて優雅に成長するシステムを構築します。',
      },
      principle3: {
        title: '開発者体験',
        description: 'クリーンなAPIと包括的なドキュメントにより、コラボレーションがシームレスになります。',
      },
      principle4: {
        title: 'データ駆動型の意思決定',
        description: 'メトリクスとモニタリングが最適化の取り組みを導き、改善を検証します。',
      },
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'コラボレーションやバックエンドエンジニアリングの機会について話し合いにご興味がありますか？お気軽にご連絡ください。',
      info: '連絡先情報',
      openTo: '現在受け付けている内容：',
      openToItems: [
        'バックエンドエンジニアリングの機会',
        '技術コンサルティングプロジェクト',
        'オープンソースコラボレーション'
      ],
      form: {
        name: '名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        send: 'メッセージを送信',
      },
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      skills: 'Kỹ năng',
      projects: 'Dự án',
      experience: 'Kinh nghiệm',
      blog: 'Blog',
      philosophy: 'Triết lý',
      contact: 'Liên hệ',
    },
    hero: {
      name: 'Cao Sơn Đức',
      title: 'Kỹ sư Backend',
      description: 'Tôi xây dựng các hệ thống backend có khả năng mở rộng, hiệu suất cao với Golang, PHP và AWS. Đam mê công nghệ tìm kiếm và hệ thống phân tán.',
      cv: 'CV (PDF)',
      techStack: 'Golang · PHP · AWS · OpenSearch',
    },
    skills: {
      title: 'Kỹ năng kỹ thuật',
      subtitle: 'Chuyên môn trải rộng phát triển backend, công nghệ tìm kiếm và hạ tầng đám mây',
      categories: {
        languages: 'Ngôn ngữ lập trình',
        backend: 'Backend & Cơ sở dữ liệu',
        search: 'Công nghệ tìm kiếm',
        infrastructure: 'Hạ tầng & Công cụ',
      },
    },
    projects: {
      title: 'Dự án nổi bật',
      subtitle: 'Các dự án chính thể hiện chuyên môn kỹ thuật backend của tôi',
      viewCode: 'Mã nguồn',
      viewDemo: 'Demo',
      project1: {
        title: 'Nền tảng SNS giống Reddit',
        description: 'Xây dựng dịch vụ mạng xã hội có khả năng mở rộng với tính năng thời gian thực, xác thực người dùng và quản lý nội dung sử dụng Golang và PostgreSQL.',
      },
      project2: {
        title: 'Tối ưu hóa OpenSearch Engine',
        description: 'Dẫn đầu cải thiện hiệu suất tìm kiếm đạt thời gian phản hồi truy vấn nhanh hơn 40% và tăng cường điểm số liên quan cho phân phối thông cáo báo chí.',
      },
      project3: {
        title: 'Hạ tầng Terraform AWS',
        description: 'Thiết kế và triển khai Infrastructure as Code cho triển khai đa môi trường với tích hợp Fastly CDN và tự động mở rộng.',
      },
    },
    experience: {
      title: 'Kinh nghiệm làm việc',
      subtitle: 'Xây dựng hệ thống backend mạnh mẽ và hạ tầng tìm kiếm',
      current: 'Hiện tại',
      job1: {
        company: 'Freee K.K.',
        role: 'Kỹ sư Backend',
        description: 'Dẫn đầu phát triển backend cho ứng dụng fintech, tập trung vào tối ưu hóa hiệu suất và độ tin cậy của hệ thống.',
        highlights: [
          'Kiến trúc microservices xử lý hơn 100K giao dịch hàng ngày',
          'Giảm thời gian phản hồi API 40% thông qua chiến lược bộ nhớ đệm',
          'Triển khai hệ thống xử lý lỗi và giám sát mạnh mẽ'
        ],
      },
      job2: {
        company: 'PR Times',
        role: 'Kỹ sư Tìm kiếm',
        description: 'Chuyên về hạ tầng tìm kiếm và tối ưu hóa cho nền tảng phân phối thông cáo báo chí.',
        highlights: [
          'Tối ưu hóa truy vấn OpenSearch giảm độ trễ 50%',
          'Thiết kế thuật toán tính điểm liên quan cho kết quả tìm kiếm tốt hơn',
          'Xây dựng pipeline lập chỉ mục thời gian thực cho khả năng sẵn sàng nội dung tức thì'
        ],
      },
    },
    blog: {
      title: 'Bài viết gần đây',
      subtitle: 'Suy nghĩ về phát triển backend và hệ thống phân tán',
      readMore: 'Đọc thêm →',
      post1: {
        title: 'Tối ưu hóa OpenSearch cho ứng dụng lưu lượng cao',
        excerpt: 'Tìm hiểu sâu về kỹ thuật tối ưu hóa truy vấn và chiến lược lập chỉ mục đã cải thiện hiệu suất tìm kiếm 40% trong production.',
        date: '15 tháng 3, 2024',
      },
      post2: {
        title: 'Xây dựng Microservices có khả năng mở rộng với Golang',
        excerpt: 'Bài học rút ra từ việc thiết kế nền tảng microservices xử lý hàng triệu yêu cầu hàng ngày.',
        date: '28 tháng 2, 2024',
      },
      post3: {
        title: 'Infrastructure as Code với Terraform',
        excerpt: 'Thực tiễn tốt nhất để quản lý hạ tầng AWS đa môi trường sử dụng Terraform và GitOps.',
        date: '10 tháng 1, 2024',
      },
    },
    philosophy: {
      title: 'Triết lý kỹ thuật',
      subtitle: 'Nguyên tắc hướng dẫn cách tiếp cận phát triển backend của tôi',
      principle1: {
        title: 'Hiệu suất là ưu tiên',
        description: 'Mỗi mili giây đều quan trọng. Tôi tối ưu hóa tốc độ và hiệu quả ngay từ đầu.',
      },
      principle2: {
        title: 'Kiến trúc có thể mở rộng',
        description: 'Xây dựng hệ thống phát triển linh hoạt theo nhu cầu, không chỉ cho yêu cầu hiện tại.',
      },
      principle3: {
        title: 'Trải nghiệm nhà phát triển',
        description: 'API sạch sẽ và tài liệu toàn diện giúp cộng tác trở nên liền mạch.',
      },
      principle4: {
        title: 'Quyết định dựa trên dữ liệu',
        description: 'Số liệu và giám sát hướng dẫn nỗ lực tối ưu hóa và xác thực cải tiến.',
      },
    },
    contact: {
      title: 'Liên hệ',
      subtitle: 'Quan tâm đến việc hợp tác hoặc thảo luận về cơ hội kỹ sư backend? Hãy kết nối.',
      info: 'Thông tin liên hệ',
      openTo: 'Hiện đang sẵn sàng cho:',
      openToItems: [
        'Cơ hội kỹ sư backend',
        'Dự án tư vấn kỹ thuật',
        'Cộng tác mã nguồn mở'
      ],
      form: {
        name: 'Tên',
        email: 'Email',
        subject: 'Chủ đề',
        message: 'Tin nhắn',
        send: 'Gửi tin nhắn',
      },
    },
  },
}