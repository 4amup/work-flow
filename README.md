# work-flow
工作流程化的一个软件
## 技术选型
* 测试了论坛上的一个[excel-class](https://cnodejs.org/topic/5960a411a4de5625080fe1fc)，发现对分隔单元格处理不行。
* 然后根据[帖子](https://cnodejs.org/topic/5846c5914c17b38d35436412)内容测试[node-xlsx](https://github.com/mgcrea/node-xlsx)，满足需求，解析的数据是JSON格式，方便处理。
* 由于程序完全依赖于外部单位源文件，所以需要增加一个源文件格式变化的提醒功能，使程序更加健壮。