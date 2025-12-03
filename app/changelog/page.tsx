import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, GitBranch, Sparkles, Bug, Zap, Plus, Settings, Shield } from "lucide-react";

export const metadata = {
  title: "更新日志 - Infinity2Chrome | 书签迁移工具",
  description: "查看 Infinity2Chrome 的版本更新历史和功能迭代记录。",
};

const changelogs = [
  {
    version: "1.0.1",
    date: "2025-12-03",
    type: "patch",
    changes: [
      {
        type: "fix",
        icon: Bug,
        description: "修复文件夹内的子站点无法导出问题",
      },
    ],
  },
  {
    version: "1.0.0",
    date: "2025-12-02",
    type: "major",
    changes: [
      {
        type: "new",
        icon: Sparkles,
        description: "🎉 首次发布 Infinity2Chrome",
      },
      {
        type: "new",
        icon: Shield,
        description: "支持 .infinity 和 .json 格式的备份文件导入",
      },
      {
        type: "new",
        icon: Plus,
        description: "支持导出为 Chrome 标准书签 HTML 格式",
      },
      {
        type: "new",
        icon: Shield,
        description: "纯本地处理，保证数据安全和隐私",
      },
      {
        type: "new",
        icon: GitBranch,
        description: "开源代码，完全透明可审查",
      },
    ],
  },
];

const typeConfig = {
  major: { label: "重大版本", color: "bg-purple-500" },
  feature: { label: "新功能", color: "bg-blue-500" },
  patch: { label: "修复", color: "bg-green-500" },
};

const changeTypeConfig = {
  new: { label: "新增", color: "text-green-600 dark:text-green-400" },
  improvement: { label: "改进", color: "text-blue-600 dark:text-blue-400" },
  fix: { label: "修复", color: "text-orange-600 dark:text-orange-400" },
};

export default function ChangelogPage() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='flex items-center gap-3 mb-8'>
        <Clock className='h-8 w-8 text-primary' />
        <div>
          <h1 className='text-2xl font-bold'>更新日志</h1>
          <p className='text-muted-foreground'>记录每一次进步与改进</p>
        </div>
      </div>

      <div className='space-y-6'>
        {changelogs.map((log, index) => {
          const typeInfo = typeConfig[log.type as keyof typeof typeConfig];
          return (
            <Card key={log.version} className='relative overflow-hidden'>
              {/* 版本标识线 */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${typeInfo.color}`} />

              <CardHeader>
                <div className='flex items-center justify-between flex-wrap gap-2'>
                  <div className='flex items-center gap-3'>
                    <CardTitle className='text-xl'>v{log.version}</CardTitle>
                    <Badge variant='secondary' className='text-xs'>
                      {typeInfo.label}
                    </Badge>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Clock className='h-4 w-4' />
                    <span>{log.date}</span>
                  </div>
                </div>
                {index === 0 && (
                  <CardDescription className='flex items-center gap-1'>
                    <Sparkles className='h-4 w-4' />
                    最新版本
                  </CardDescription>
                )}
              </CardHeader>

              <CardContent>
                <ul className='space-y-3'>
                  {log.changes.map((change, changeIndex) => {
                    const Icon = change.icon;
                    const changeTypeInfo = changeTypeConfig[change.type as keyof typeof changeTypeConfig];
                    return (
                      <li key={changeIndex} className='flex items-start gap-3 p-3 rounded-lg bg-muted/30'>
                        <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${changeTypeInfo.color}`} />
                        <div className='flex-1'>
                          <div className='flex items-center gap-2 mb-1'>
                            <Badge variant='outline' className='text-xs'>
                              {changeTypeInfo.label}
                            </Badge>
                          </div>
                          <p className='text-sm text-muted-foreground leading-relaxed'>{change.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 底部提示 */}
      <Card className='mt-8 border-dashed'>
        <CardContent className='pt-6'>
          <div className='flex items-start gap-3'>
            <GitBranch className='h-5 w-5 text-primary shrink-0 mt-0.5' />
            <div className='space-y-2'>
              <p className='text-sm font-medium'>持续改进中</p>
              <p className='text-sm text-muted-foreground'>
                我们会持续优化产品功能，如果您有任何建议或发现问题，欢迎在{" "}
                <a
                  href='https://github.com/extrastu/Infinity2Chrome/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary underline underline-offset-2 hover:text-primary/80'
                >
                  GitHub Issues
                </a>{" "}
                中反馈。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
