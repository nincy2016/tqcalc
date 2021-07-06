﻿function Skill(name,min_points,spells,prereq,desc) {
this.name = name
this.min_points = min_points
this.desc = desc
this.spells = spells
this.prereq = prereq
}
function Attribute(Hth,Egy,Str,Dex,Int) {
this.str = Str
this.dex = Dex
this.health = Hth
this.inte = Int
this.energy = Egy
}
function SpellInfo(spellinfo) {
this.spellinfo = spellinfo
}
function setmastery(Skills,Attributes) {
this.Skills = Skills
this.masteryid = 3
this.masteryname = "战斗专精"
this.Attributes = Attributes
}
if (!AttributesBase[0]) {
AttributesBase[0] = new Attribute(300,300,50,50,50)
}
Attributes = new Array();
Attributes[1] = new Attribute(40,0,2,2,0)
Attributes[2] = new Attribute(80,0,4,4,0)
Attributes[3] = new Attribute(120,0,6,6,0)
Attributes[4] = new Attribute(160,0,8,8,0)
Attributes[5] = new Attribute(200,0,10,10,0)
Attributes[6] = new Attribute(240,0,12,12,0)
Attributes[7] = new Attribute(280,0,14,14,0)
Attributes[8] = new Attribute(320,0,16,16,0)
Attributes[9] = new Attribute(360,0,18,18,0)
Attributes[10] = new Attribute(400,0,20,20,0)
Attributes[11] = new Attribute(440,0,22,22,0)
Attributes[12] = new Attribute(480,0,24,24,0)
Attributes[13] = new Attribute(520,0,26,26,0)
Attributes[14] = new Attribute(560,0,28,28,0)
Attributes[15] = new Attribute(600,0,30,30,0)
Attributes[16] = new Attribute(640,0,32,32,0)
Attributes[17] = new Attribute(680,0,34,34,0)
Attributes[18] = new Attribute(720,0,36,36,0)
Attributes[19] = new Attribute(760,0,38,38,0)
Attributes[20] = new Attribute(800,0,40,40,0)
Attributes[21] = new Attribute(840,0,42,42,0)
Attributes[22] = new Attribute(880,0,44,44,0)
Attributes[23] = new Attribute(920,0,46,46,0)
Attributes[24] = new Attribute(960,0,48,48,0)
Attributes[25] = new Attribute(1000,0,50,50,0)
Attributes[26] = new Attribute(1040,0,52,52,0)
Attributes[27] = new Attribute(1080,0,54,54,0)
Attributes[28] = new Attribute(1120,0,56,56,0)
Attributes[29] = new Attribute(1160,0,58,58,0)
Attributes[30] = new Attribute(1200,0,60,60,0)
Attributes[31] = new Attribute(1240,0,62,62,0)
Attributes[32] = new Attribute(1280,0,64,64,0)
Attributes[33] = new Attribute(1320,0,66,66,0)
Attributes[34] = new Attribute(1360,0,68,68,0)
Attributes[35] = new Attribute(1400,0,70,70,0)
Attributes[36] = new Attribute(1440,0,72,72,0)
Attributes[37] = new Attribute(1480,0,74,74,0)
Attributes[38] = new Attribute(1520,0,76,76,0)
Attributes[39] = new Attribute(1560,0,78,78,0)
Attributes[40] = new Attribute(1600,0,80,80,0)
Skills = new Array();
Spells = new Array();
Spells[1] = new SpellInfo("+62 点战斗能力<br>+5% 攻击速度")
Spells[2] = new SpellInfo("+94 点战斗能力<br>+8% 攻击速度")
Spells[3] = new SpellInfo("+126 点战斗能力<br>+10% 攻击速度")
Spells[4] = new SpellInfo("+158 点战斗能力<br>+12% 攻击速度")
Spells[5] = new SpellInfo("+190 点战斗能力<br>+14% 攻击速度")
Spells[6] = new SpellInfo("+222 点战斗能力<br>+16% 攻击速度")
Spells[7] = new SpellInfo("+254 点战斗能力<br>+18% 攻击速度")
Spells[8] = new SpellInfo("+286 点战斗能力<br>+20% 攻击速度")
Spells[9] = new SpellInfo("+318 点战斗能力<br>+22% 攻击速度")
Spells[10] = new SpellInfo("+350 点战斗能力<br>+25% 攻击速度")
Skills[0] = new Skill("<font color=#00B8F5>武器大师</font>",1,Spells,-1,"<font color=#FFF52B>经过长年累月接受剑、斧和棍棒的训练，可以使你更快速准确地进攻，并获得投掷熟练度。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>8 伤害<br>+33% 战斗能力")
Spells[2] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>14 伤害<br>+33% 战斗能力")
Spells[3] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>20 伤害<br>+33% 战斗能力")
Spells[4] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>26 伤害<br>+33% 战斗能力")
Spells[5] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>33 伤害<br>+33% 战斗能力")
Spells[6] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>40 伤害<br>+33% 战斗能力")
Spells[7] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>46 伤害<br>+33% 战斗能力")
Spells[8] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>54 伤害<br>+33% 战斗能力")
Spells[9] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>61 伤害<br>+33% 战斗能力")
Spells[10] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>68 伤害<br>+33% 战斗能力")
Spells[11] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>75 伤害<br>+33% 战斗能力")
Spells[12] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>84 伤害<br>+33% 战斗能力")
Spells[13] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>91 伤害<br>+33% 战斗能力")
Spells[14] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>98 伤害<br>+33% 战斗能力")
Spells[15] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>106 伤害<br>+33% 战斗能力")
Spells[16] = new SpellInfo("<font color=#33FFCC>12.0 秒冷却</font><br>8% 机率激发<br>10.0 秒持续时间<br>115 伤害<br>+33% 战斗能力")
Skills[1] = new Skill("<font color=#00B8F5>战斗狂暴</font>",1,Spells,-1,"<font color=#FFF52B>敌人的每一下攻击都有可能令你狂暴，狂暴时攻击伤害增加，并且提高进攻能力。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("1 法力消耗<br>1 蓄能等级<br>+10% 物理伤害<br>+15% 加快投射速度")
Spells[2] = new SpellInfo("1 法力消耗<br>2 蓄能等级<br>+16% 物理伤害<br>+24% 加快投射速度")
Spells[3] = new SpellInfo("1 法力消耗<br>3 蓄能等级<br>+22% 物理伤害<br>+33% 加快投射速度")
Spells[4] = new SpellInfo("1 法力消耗<br>4 蓄能等级<br>+28% 物理伤害<br>+42% 加快投射速度")
Spells[5] = new SpellInfo("1 法力消耗<br>5 蓄能等级<br>+34% 物理伤害<br>+51% 加快投射速度")
Spells[6] = new SpellInfo("1 法力消耗<br>6 蓄能等级<br>+40% 物理伤害<br>+60% 加快投射速度")
Spells[7] = new SpellInfo("1 法力消耗<br>7 蓄能等级<br>+46% 物理伤害<br>+69% 加快投射速度")
Spells[8] = new SpellInfo("1 法力消耗<br>8 蓄能等级<br>+52% 物理伤害<br>+78% 加快投射速度")
Spells[9] = new SpellInfo("1 法力消耗<br>9 蓄能等级<br>+58% 物理伤害<br>+87% 加快投射速度")
Spells[10] = new SpellInfo("1 法力消耗<br>10 蓄能等级<br>+64% 物理伤害<br>+96% 加快投射速度")
Spells[11] = new SpellInfo("1 法力消耗<br>11 蓄能等级<br>+70% 物理伤害<br>+105% 加快投射速度")
Spells[12] = new SpellInfo("1 法力消耗<br>12 蓄能等级<br>+76% 物理伤害<br>+114% 加快投射速度")
Skills[2] = new Skill("<font color=#00B8F5>冲击</font>",1,Spells,-1,"<font color=#FFF52B>当使用冲击作为你的默认攻击时，每一下连续的进攻都会增加攻击的伤害。当攻击不连续时，猛攻的力量很快便会消散。可将此技能用于鼠标左键。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("12% 机率被使用<br>10 伤害")
Spells[2] = new SpellInfo("14% 机率被使用<br>10 伤害")
Spells[3] = new SpellInfo("16% 机率被使用<br>10 伤害")
Spells[4] = new SpellInfo("18% 机率被使用<br>10 伤害")
Spells[5] = new SpellInfo("20% 机率被使用<br>10 伤害")
Spells[6] = new SpellInfo("22% 机率被使用<br>10 伤害")
Spells[7] = new SpellInfo("24% 机率被使用<br>10 伤害")
Spells[8] = new SpellInfo("26% 机率被使用<br>10 伤害")
Spells[9] = new SpellInfo("28% 机率被使用<br>10 伤害")
Spells[10] = new SpellInfo("30% 机率被使用<br>10 伤害")
Skills[3] = new Skill("<font color=#00B8F5>双手持刃</font>",4,Spells,-1,"<font color=#FFF52B>学会有效地挥舞两把武器并偶尔使出双手攻击或投掷。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("3% 机率避开攻击")
Spells[2] = new SpellInfo("6% 机率避开攻击")
Spells[3] = new SpellInfo("8% 机率避开攻击")
Spells[4] = new SpellInfo("10% 机率避开攻击")
Spells[5] = new SpellInfo("12% 机率避开攻击")
Spells[6] = new SpellInfo("15% 机率避开攻击")
Spells[7] = new SpellInfo("18% 机率避开攻击")
Spells[8] = new SpellInfo("21% 机率避开攻击")
Spells[9] = new SpellInfo("23% 机率避开攻击")
Spells[10] = new SpellInfo("25% 机率避开攻击")
Spells[11] = new SpellInfo("27% 机率避开攻击")
Spells[12] = new SpellInfo("30% 机率避开攻击")
Skills[4] = new Skill("<font color=#00B8F5>闪避</font>",4,Spells,-1,"<font color=#FFF52B>即使是最坚固的装甲也会有它的弱点，存活的最佳方法是别被击中。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("3% 物理伤害抗性<br>3% 穿刺抵抗")
Spells[2] = new SpellInfo("6% 物理伤害抗性<br>6% 穿刺抵抗")
Spells[3] = new SpellInfo("8% 物理伤害抗性<br>8% 穿刺抵抗")
Spells[4] = new SpellInfo("10% 物理伤害抗性<br>10% 穿刺抵抗")
Spells[5] = new SpellInfo("12% 物理伤害抗性<br>12% 穿刺抵抗")
Spells[6] = new SpellInfo("15% 物理伤害抗性<br>15% 穿刺抵抗")
Spells[7] = new SpellInfo("16% 物理伤害抗性<br>16% 穿刺抵抗")
Spells[8] = new SpellInfo("17% 物理伤害抗性<br>17% 穿刺抵抗")
Spells[9] = new SpellInfo("18% 物理伤害抗性<br>18% 穿刺抵抗")
Spells[10] = new SpellInfo("20% 物理伤害抗性<br>20% 穿刺抵抗")
Skills[5] = new Skill("<font color=#00B8F5>专注</font>",4,Spells,2,"<font color=#FFF52B>专注于战斗的激烈当中可以让你忽略物理和穿刺伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>52 法力消耗<br>8.0 米范围<br>1.5 ~ 3.0 秒眩晕")
Spells[2] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>54 法力消耗<br>8.4 米范围<br>1.5 ~ 3.5 秒眩晕")
Spells[3] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>56 法力消耗<br>8.8 米范围<br>1.5 ~ 3.9 秒眩晕")
Spells[4] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>58 法力消耗<br>9.2 米范围<br>1.5 ~ 4.3 秒眩晕")
Spells[5] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>60 法力消耗<br>9.6 米范围<br>1.5 ~ 4.6 秒眩晕")
Spells[6] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>62 法力消耗<br>10.0 米范围<br>1.5 ~ 5.0 秒眩晕")
Spells[7] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>64 法力消耗<br>10.4 米范围<br>1.5 ~ 5.3 秒眩晕")
Spells[8] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>66 法力消耗<br>10.8 米范围<br>1.5 ~ 5.6 秒眩晕")
Spells[9] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>68 法力消耗<br>11.2 米范围<br>1.5 ~ 6.0 秒眩晕")
Spells[10] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>70 法力消耗<br>11.6 米范围<br>1.5 ~ 6.5 秒眩晕")
Spells[11] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>72 法力消耗<br>12.0 米范围<br>1.5 ~ 6.7 秒眩晕")
Spells[12] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>74 法力消耗<br>12.4 米范围<br>1.5 ~ 6.9 秒眩晕")
Spells[13] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>76 法力消耗<br>12.8 米范围<br>1.5 ~ 7.2 秒眩晕")
Spells[14] = new SpellInfo("<font color=#33FFCC>18.0 秒冷却</font><br>78 法力消耗<br>13.2 米范围<br>1.5 ~ 7.5 秒眩晕")
Skills[6] = new Skill("<font color=#00B8F5>战争号角</font>",4,Spells,-1,"<font color=#FFF52B>战争号角的胜利呼唤可令敌人暂时昏迷。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("3% 机率被使用<br>+50% 物理伤害")
Spells[2] = new SpellInfo("4% 机率被使用<br>+50% 物理伤害")
Spells[3] = new SpellInfo("6% 机率被使用<br>+50% 物理伤害")
Spells[4] = new SpellInfo("7% 机率被使用<br>+50% 物理伤害")
Spells[5] = new SpellInfo("9% 机率被使用<br>+50% 物理伤害")
Spells[6] = new SpellInfo("10% 机率被使用<br>+50% 物理伤害")
Spells[7] = new SpellInfo("11% 机率被使用<br>+50% 物理伤害")
Spells[8] = new SpellInfo("12% 机率被使用<br>+50% 物理伤害")
Spells[9] = new SpellInfo("13% 机率被使用<br>+50% 物理伤害")
Spells[10] = new SpellInfo("15% 机率被使用<br>+50% 物理伤害")
Skills[7] = new Skill("<font color=#00B8F5>劈斩</font>",10,Spells,3,"<font color=#FFF52B>一个会增加 50% 伤害的双持技巧。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("25.0% 机率发动 25 ~ 51 伤害")
Spells[2] = new SpellInfo("25.0% 机率发动 45 ~ 76 伤害")
Spells[3] = new SpellInfo("25.0% 机率发动 66 ~ 101 伤害")
Spells[4] = new SpellInfo("25.0% 机率发动 87 ~ 126 伤害")
Spells[5] = new SpellInfo("25.0% 机率发动 108 ~ 151 伤害")
Spells[6] = new SpellInfo("25.0% 机率发动 130 ~ 177 伤害")
Spells[7] = new SpellInfo("25.0% 机率发动 152 ~ 203 伤害")
Spells[8] = new SpellInfo("25.0% 机率发动 174 ~ 229 伤害")
Spells[9] = new SpellInfo("25.0% 机率发动 197 ~ 256 伤害")
Spells[10] = new SpellInfo("25.0% 机率发动 220 ~ 283 伤害")
Spells[11] = new SpellInfo("25.0% 机率发动 243 ~ 310 伤害")
Spells[12] = new SpellInfo("25.0% 机率发动 267 ~ 338 伤害")
Spells[13] = new SpellInfo("25.0% 机率发动 291 ~ 366 伤害")
Spells[14] = new SpellInfo("25.0% 机率发动 315 ~ 394 伤害")
Spells[15] = new SpellInfo("25.0% 机率发动 340 ~ 423 伤害")
Spells[16] = new SpellInfo("25.0% 机率发动 365 ~ 452 伤害")
Skills[8] = new Skill("<font color=#00B8F5>致命一击</font>",10,Spells,1,"<font color=#FFF52B>在战斗狂暴时有机会使出致命攻击提高伤害。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 18.0 秒<br>　180 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>20.0 秒持续时间<br>12.0 米范围<br>12% 伤害吸收<br>+1 到所有技能<br>12 伤害<br>+16 点战斗能力<br>-50% 法力消耗</font>")
Spells[2] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 20.0 秒<br>　210 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>26.0 秒持续时间<br>12.0 米范围<br>15% 伤害吸收<br>+1 到所有技能<br>25 伤害<br>+24 点战斗能力<br>-50% 法力消耗</font>")
Spells[3] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 22.0 秒<br>　240 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>32.0 秒持续时间<br>12.0 米范围<br>18% 伤害吸收<br>+1 到所有技能<br>39 伤害<br>+32 点战斗能力<br>-50% 法力消耗</font>")
Spells[4] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 24.0 秒<br>　270 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>38.0 秒持续时间<br>12.0 米范围<br>21% 伤害吸收<br>+1 到所有技能<br>54 伤害<br>+40 点战斗能力<br>-50% 法力消耗</font>")
Spells[5] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 26.0 秒<br>　300 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>44.0 秒持续时间<br>12.0 米范围<br>23% 伤害吸收<br>+1 到所有技能<br>70 伤害<br>+48 点战斗能力<br>-50% 法力消耗</font>")
Spells[6] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 28.0 秒<br>　330 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>50.0 秒持续时间<br>12.0 米范围<br>25% 伤害吸收<br>+1 到所有技能<br>87 伤害<br>+56 点战斗能力<br>-50% 法力消耗</font>")
Spells[7] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 30.0 秒<br>　360 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>56.0 秒持续时间<br>12.0 米范围<br>28% 伤害吸收<br>+1 到所有技能<br>105 伤害<br>+64 点战斗能力<br>-50% 法力消耗</font>")
Spells[8] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 32.0 秒<br>　390 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>62.0 秒持续时间<br>12.0 米范围<br>30% 伤害吸收<br>+1 到所有技能<br>124 伤害<br>+72 点战斗能力<br>-50% 法力消耗</font>")
Spells[9] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 34.0 秒<br>　420 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>68.0 秒持续时间<br>12.0 米范围<br>33% 伤害吸收<br>+1 到所有技能<br>144 伤害<br>+80 点战斗能力<br>-50% 法力消耗</font>")
Spells[10] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 36.0 秒<br>　450 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>74.0 秒持续时间<br>12.0 米范围<br>36% 伤害吸收<br>+1 到所有技能<br>166 伤害<br>+88 点战斗能力<br>-50% 法力消耗</font>")
Spells[11] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 36.0 秒<br>　480 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>80.0 秒持续时间<br>12.0 米范围<br>38% 伤害吸收<br>+1 到所有技能<br>190 伤害<br>+96 点战斗能力<br>-50% 法力消耗</font>")
Spells[12] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 36.0 秒<br>　510 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>86.0 秒持续时间<br>12.0 米范围<br>40% 伤害吸收<br>+1 到所有技能<br>216 伤害<br>+104 点战斗能力<br>-50% 法力消耗</font>")
Spells[13] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 36.0 秒<br>　540 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>92.0 秒持续时间<br>12.0 米范围<br>42% 伤害吸收<br>+1 到所有技能<br>244 伤害<br>+112 点战斗能力<br>-50% 法力消耗</font>")
Spells[14] = new SpellInfo("<font color=#33FFCC>60.0 秒冷却</font><br>50 法力消耗<br>军旗 属性：<br>持续时间 36.0 秒<br>　570 生命<br><br>军旗 能力：<font color=#33CCFF><br>战斗军旗</font><br><font color=#00A3FF>98.0 秒持续时间<br>12.0 米范围<br>45% 伤害吸收<br>+1 到所有技能<br>274 伤害<br>+120 点战斗能力<br>-50% 法力消耗</font>")
Skills[9] = new Skill("<font color=#00B8F5>战斗军旗</font>",10,Spells,-1,"<font color=#FFF52B>抛出一支伟大的军旗激励人心。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>65 法力消耗<br>360 攻击角度<br>4 最大目标数<br>-28% 物理伤害<br>+300% 移动速度")
Spells[2] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>68 法力消耗<br>360 攻击角度<br>4 最大目标数<br>-21% 物理伤害<br>+300% 移动速度")
Spells[3] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>71 法力消耗<br>360 攻击角度<br>4 最大目标数<br>-14% 物理伤害<br>+300% 移动速度")
Spells[4] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>74 法力消耗<br>360 攻击角度<br>4 最大目标数<br>-7% 物理伤害<br>+300% 移动速度")
Spells[5] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>77 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+0% 物理伤害<br>+300% 移动速度")
Spells[6] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>80 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+7% 物理伤害<br>+300% 移动速度")
Spells[7] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>83 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+14% 物理伤害<br>+300% 移动速度")
Spells[8] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>86 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+21% 物理伤害<br>+300% 移动速度")
Spells[9] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>89 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+28% 物理伤害<br>+300% 移动速度")
Spells[10] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>92 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+35% 物理伤害<br>+300% 移动速度")
Spells[11] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>95 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+42% 物理伤害<br>+300% 移动速度")
Spells[12] = new SpellInfo("<font color=#33FFCC>8.0 秒冷却</font><br>98 法力消耗<br>360 攻击角度<br>4 最大目标数<br>+49% 物理伤害<br>+300% 移动速度")
Skills[10] = new Skill("<font color=#00B8F5>战风</font>",10,Spells,-1,"<font color=#FFF52B>使用一个可以击中最多四名敌人的毁灭性转动攻击。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("3% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>22 流血伤害在 3.0 秒内")
Spells[2] = new SpellInfo("4% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>45 流血伤害在 3.0 秒内")
Spells[3] = new SpellInfo("6% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>60 流血伤害在 3.0 秒内")
Spells[4] = new SpellInfo("7% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>75 流血伤害在 3.0 秒内")
Spells[5] = new SpellInfo("9% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>97 流血伤害在 3.0 秒内")
Spells[6] = new SpellInfo("10% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>120 流血伤害在 3.0 秒内")
Spells[7] = new SpellInfo("11% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>149 流血伤害在 3.0 秒内")
Spells[8] = new SpellInfo("12% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>179 流血伤害在 3.0 秒内")
Spells[9] = new SpellInfo("13% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>217 流血伤害在 3.0 秒内")
Spells[10] = new SpellInfo("15% 机率被使用<br>90 攻击角度<br>2 最大目标数<br>261 流血伤害在 3.0 秒内")
Skills[11] = new Skill("<font color=#00B8F5>十字斩</font>",16,Spells,3,"<font color=#FFF52B>一种双持的技巧，使用如剪刀般的十字砍同时攻击两名敌人。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("8% 降低防御能力 持续 3.0 秒<br>16 降低护甲 持续 6.0 秒<br>10% 减慢速度 持续 5.0 秒")
Spells[2] = new SpellInfo("12% 降低防御能力 持续 3.0 秒<br>24 降低护甲 持续 6.0 秒<br>15% 减慢速度 持续 5.0 秒")
Spells[3] = new SpellInfo("16% 降低防御能力 持续 3.0 秒<br>32 降低护甲 持续 6.0 秒<br>20% 减慢速度 持续 5.0 秒")
Spells[4] = new SpellInfo("20% 降低防御能力 持续 3.0 秒<br>40 降低护甲 持续 6.0 秒<br>25% 减慢速度 持续 5.0 秒")
Spells[5] = new SpellInfo("24% 降低防御能力 持续 3.0 秒<br>48 降低护甲 持续 6.0 秒<br>30% 减慢速度 持续 5.0 秒")
Spells[6] = new SpellInfo("28% 降低防御能力 持续 3.0 秒<br>56 降低护甲 持续 6.0 秒<br>35% 减慢速度 持续 5.0 秒")
Spells[7] = new SpellInfo("32% 降低防御能力 持续 3.0 秒<br>64 降低护甲 持续 6.0 秒<br>40% 减慢速度 持续 5.0 秒")
Spells[8] = new SpellInfo("36% 降低防御能力 持续 3.0 秒<br>72 降低护甲 持续 6.0 秒<br>45% 减慢速度 持续 5.0 秒")
Spells[9] = new SpellInfo("40% 降低防御能力 持续 3.0 秒<br>80 降低护甲 持续 6.0 秒<br>50% 减慢速度 持续 5.0 秒")
Spells[10] = new SpellInfo("44% 降低防御能力 持续 3.0 秒<br>90 降低护甲 持续 6.0 秒<br>55% 减慢速度 持续 5.0 秒")
Skills[12] = new Skill("<font color=#00B8F5>断筋</font>",16,Spells,2,"<font color=#FFF52B>瞄准敌人腿部攻击，降低他们的奔跑能力并且令他们短时间内更易受伤。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("15.0% 机率发动 54 ~ 93 物理反击")
Spells[2] = new SpellInfo("15.0% 机率发动 60 ~ 105 物理反击")
Spells[3] = new SpellInfo("15.0% 机率发动 69 ~ 117 物理反击")
Spells[4] = new SpellInfo("15.0% 机率发动 75 ~ 129 物理反击")
Spells[5] = new SpellInfo("15.0% 机率发动 90 ~ 153 物理反击")
Spells[6] = new SpellInfo("15.0% 机率发动 99 ~ 168 物理反击")
Spells[7] = new SpellInfo("15.0% 机率发动 105 ~ 192 物理反击")
Spells[8] = new SpellInfo("15.0% 机率发动 114 ~ 213 物理反击")
Spells[9] = new SpellInfo("15.0% 机率发动 120 ~ 231 物理反击")
Spells[10] = new SpellInfo("15.0% 机率发动 135 ~ 267 物理反击")
Spells[11] = new SpellInfo("15.0% 机率发动 144 ~ 294 物理反击")
Spells[12] = new SpellInfo("15.0% 机率发动 150 ~ 324 物理反击")
Spells[13] = new SpellInfo("15.0% 机率发动 159 ~ 357 物理反击")
Spells[14] = new SpellInfo("15.0% 机率发动 165 ~ 387 物理反击")
Spells[15] = new SpellInfo("15.0% 机率发动 183 ~ 429 物理反击")
Spells[16] = new SpellInfo("15.0% 机率发动 195 ~ 468 物理反击")
Skills[13] = new Skill("<font color=#00B8F5>反击</font>",24,Spells,1,"<font color=#FFF52B>在战斗狂暴时被击中后有机会可以反击敌人。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-15% 物理伤害<br>-15% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[2] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-20% 物理伤害<br>-20% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[3] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-25% 物理伤害<br>-25% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[4] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-30% 物理伤害<br>-30% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[5] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-35% 物理伤害<br>-35% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[6] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-40% 物理伤害<br>-40% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[7] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-45% 物理伤害<br>-45% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[8] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-50% 物理伤害<br>-50% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[9] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-55% 物理伤害<br>-55% 物理伤害抗性<br>-50% 眩晕抵抗")
Spells[10] = new SpellInfo("90.0 秒持续时间<br>12.0 米范围<br>-60% 物理伤害<br>-60% 物理伤害抗性<br>-50% 眩晕抵抗")
Skills[14] = new Skill("<font color=#00B8F5>胜利之光</font>",24,Spells,9,"<font color=#FFF52B>知道你胜利在望，敌人失去了希望，使得他们攻击的力量减弱。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("12 法力消耗<br>1 最大目标数<br>76 流血伤害在 3.0 秒内")
Spells[2] = new SpellInfo("14 法力消耗<br>1 最大目标数<br>94 流血伤害在 3.0 秒内")
Spells[3] = new SpellInfo("17 法力消耗<br>2 最大目标数<br>113 流血伤害在 3.0 秒内")
Spells[4] = new SpellInfo("19 法力消耗<br>2 最大目标数<br>132 流血伤害在 3.0 秒内")
Spells[5] = new SpellInfo("21 法力消耗<br>2 最大目标数<br>149 流血伤害在 3.0 秒内")
Spells[6] = new SpellInfo("24 法力消耗<br>3 最大目标数<br>171 流血伤害在 3.0 秒内")
Spells[7] = new SpellInfo("26 法力消耗<br>3 最大目标数<br>195 流血伤害在 3.0 秒内")
Spells[8] = new SpellInfo("28 法力消耗<br>3 最大目标数<br>219 流血伤害在 3.0 秒内")
Spells[9] = new SpellInfo("31 法力消耗<br>4 最大目标数<br>244 流血伤害在 3.0 秒内")
Spells[10] = new SpellInfo("33 法力消耗<br>4 最大目标数<br>269 流血伤害在 3.0 秒内")
Spells[11] = new SpellInfo("35 法力消耗<br>4 最大目标数<br>299 流血伤害在 3.0 秒内")
Spells[12] = new SpellInfo("38 法力消耗<br>5 最大目标数<br>330 流血伤害在 3.0 秒内")
Skills[15] = new Skill("<font color=#00B8F5>割裂</font>",24,Spells,10,"<font color=#FFF52B>为战风增加出血伤害，并增加击中的目标数。需要至少一把武器为剑、斧或矛。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("20 法力消耗<br>9% 减少敌人生命值<br>24 降低护甲 持续 10.0 秒")
Spells[2] = new SpellInfo("20 法力消耗<br>12% 减少敌人生命值<br>32 降低护甲 持续 10.0 秒")
Spells[3] = new SpellInfo("20 法力消耗<br>15% 减少敌人生命值<br>40 降低护甲 持续 10.0 秒")
Spells[4] = new SpellInfo("20 法力消耗<br>18% 减少敌人生命值<br>48 降低护甲 持续 10.0 秒")
Spells[5] = new SpellInfo("20 法力消耗<br>21% 减少敌人生命值<br>56 降低护甲 持续 10.0 秒")
Spells[6] = new SpellInfo("20 法力消耗<br>25% 减少敌人生命值<br>66 降低护甲 持续 10.0 秒")
Spells[7] = new SpellInfo("20 法力消耗<br>27% 减少敌人生命值<br>72 降低护甲 持续 10.0 秒")
Spells[8] = new SpellInfo("20 法力消耗<br>30% 减少敌人生命值<br>80 降低护甲 持续 10.0 秒")
Spells[9] = new SpellInfo("20 法力消耗<br>33% 减少敌人生命值<br>90 降低护甲 持续 10.0 秒")
Spells[10] = new SpellInfo("20 法力消耗<br>36% 减少敌人生命值<br>100 降低护甲 持续 10.0 秒")
Skills[16] = new Skill("<font color=#00B8F5>末日号角</font>",24,Spells,6,"<font color=#FFF52B>战争号角向敌人宣告末日来临，动摇他们的神经，减低他们防御的能力。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("3% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>17 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[2] = new SpellInfo("4% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>35 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[3] = new SpellInfo("6% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>48 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[4] = new SpellInfo("7% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>61 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[5] = new SpellInfo("9% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>78 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[6] = new SpellInfo("10% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>96 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[7] = new SpellInfo("11% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>119 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[8] = new SpellInfo("12% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>141 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[9] = new SpellInfo("13% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>169 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Spells[10] = new SpellInfo("15% 机率被使用<br>360 攻击角度<br>3 最大目标数<br>202 流血伤害在 3.0 秒内<br>1.0 秒眩晕")
Skills[17] = new Skill("<font color=#00B8F5>乱舞</font>",32,Spells,3,"<font color=#FFF52B>一种可以攻击三个毗邻敌人的双持技巧。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("+6% 移动速度<br>+6% 攻击速度")
Spells[2] = new SpellInfo("+8% 移动速度<br>+8% 攻击速度")
Spells[3] = new SpellInfo("+10% 移动速度<br>+10% 攻击速度")
Spells[4] = new SpellInfo("+12% 移动速度<br>+12% 攻击速度")
Spells[5] = new SpellInfo("+14% 移动速度<br>+14% 攻击速度")
Spells[6] = new SpellInfo("+16% 移动速度<br>+16% 攻击速度")
Spells[7] = new SpellInfo("+18% 移动速度<br>+18% 攻击速度")
Spells[8] = new SpellInfo("+20% 移动速度<br>+20% 攻击速度")
Spells[9] = new SpellInfo("+22% 移动速度<br>+22% 攻击速度")
Spells[10] = new SpellInfo("+25% 移动速度<br>+25% 攻击速度")
Skills[18] = new Skill("<font color=#00B8F5>狂热</font>",32,Spells,2,"<font color=#FFF52B>攻击产生的动力使你能更快速的攻击和移动。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>3 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　150 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>47 ~ 53 伤害</font>")
Spells[2] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>3 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　180 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>52 ~ 61 伤害</font>")
Spells[3] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>3 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　210 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>57 ~ 68 伤害</font>")
Spells[4] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>3 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　240 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>62 ~ 75 伤害</font>")
Spells[5] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>4 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　270 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>69 ~ 86 伤害</font>")
Spells[6] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>4 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　300 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>74 ~ 93 伤害</font>")
Spells[7] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>4 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　330 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>79 ~ 100 伤害</font>")
Spells[8] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>4 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　360 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>84 ~ 108 伤害</font>")
Spells[9] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>4 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　390 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>91 ~ 118 伤害</font>")
Spells[10] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　420 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>96 ~ 125 伤害</font>")
Spells[11] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　450 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>101 ~ 133 伤害</font>")
Spells[12] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　480 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>106 ~ 140 伤害</font>")
Spells[13] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　510 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>115 ~ 151 伤害</font>")
Spells[14] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　540 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>120 ~ 159 伤害</font>")
Spells[15] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　570 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>125 ~ 166 伤害</font>")
Spells[16] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　600 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>130 ~ 173 伤害</font>")
Spells[17] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　630 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>141 ~ 187 伤害</font>")
Spells[18] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　660 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>146 ~ 195 伤害</font>")
Spells[19] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　690 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>151 ~ 203 伤害</font>")
Spells[20] = new SpellInfo("<font color=#33FFCC>300.0 秒冷却</font><br>225 法力消耗<br>增加生命时间 24 秒<br>5 召唤上限<br>先祖的战士 属性：<br>持续时间 24.0 秒<br>　720 生命<br>　300 法力<br><br>先祖的战士 能力：<br><font color=#33CCFF>普通攻击</font><br><font color=#00A3FF>157 ~ 215 伤害</font>")
Skills[19] = new Skill("<font color=#00B8F5>祖传号角</font>",32,Spells,-1,"<font color=#FFF52B>从这件古老的祖传遗物发出的不祥呼唤，从极乐之地召来英雄的灵魂，他们再次战斗。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>80 法力消耗<br>60 ~ 80 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 1.0 秒<br>1.0 ~ 1.5 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[2] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>86 法力消耗<br>81 ~ 101 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 1.2 秒<br>1.2 ~ 1.8 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[3] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>92 法力消耗<br>103 ~ 123 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 1.4 秒<br>1.4 ~ 2.1 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[4] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>98 法力消耗<br>126 ~ 146 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 1.6 秒<br>1.6 ~ 2.4 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[5] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>104 法力消耗<br>150 ~ 170 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 1.8 秒<br>1.8 ~ 2.7 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[6] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>110 法力消耗<br>175 ~ 195 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 2.0 秒<br>2.0 ~ 3.0 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[7] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>116 法力消耗<br>201 ~ 221 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 2.2 秒<br>2.2 ~ 3.3 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[8] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>122 法力消耗<br>228 ~ 248 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 2.4 秒<br>2.4 ~ 3.6 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[9] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>128 法力消耗<br>256 ~ 276 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 2.6 秒<br>2.6 ~ 3.9 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[10] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>134 法力消耗<br>285 ~ 305 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 2.8 秒<br>2.8 ~ 4.2 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[11] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>140 法力消耗<br>315 ~ 335 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 3.0 秒<br>3.0 ~ 4.5 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[12] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>146 法力消耗<br>346 ~ 366 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 3.2 秒<br>3.2 ~ 4.8 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[13] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>152 法力消耗<br>378 ~ 398 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 3.4 秒<br>3.4 ~ 5.1 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[14] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>158 法力消耗<br>411 ~ 431 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 3.6 秒<br>3.6 ~ 5.4 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[15] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>164 法力消耗<br>445 ~ 465 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 3.8 秒<br>3.8 ~ 5.7 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Spells[16] = new SpellInfo("<font color=#33FFCC>7.0 秒冷却</font><br>170 法力消耗<br>480 ~ 500 伤害<br>20% 减少敌人生命值<br>70% 机率降低准确率 持续 4.0 秒<br>4.0 ~ 6.0 秒技能打断<br>1.0 ~ 2.0 秒眩晕")
Skills[20] = new Skill("<font color=#00B8F5>猛击</font>",40,Spells,-1,"<font color=#FFF52B>以万钧之力击中一直线上的所有敌人，中断他们的瞄准和施法能力。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("增加生命时间 4 秒")
Spells[2] = new SpellInfo("增加生命时间 7 秒")
Spells[3] = new SpellInfo("增加生命时间 10 秒")
Spells[4] = new SpellInfo("增加生命时间 13 秒")
Spells[5] = new SpellInfo("增加生命时间 17 秒")
Spells[6] = new SpellInfo("增加生命时间 21 秒")
Spells[7] = new SpellInfo("增加生命时间 25 秒")
Spells[8] = new SpellInfo("增加生命时间 30 秒")
Spells[9] = new SpellInfo("增加生命时间 35 秒")
Spells[10] = new SpellInfo("增加生命时间 40 秒")
Skills[21] = new Skill("<font color=#00B8F5>不朽遗产</font>",40,Spells,19,"<font color=#FFF52B>与你的祖先建立更深层的联系，使他们的英灵能够在你身边停留更久。</font>")
Spells = new Array();
Spells[1] = new SpellInfo("")
Skills[22] = new Skill("",40,Spells,-1,"")
Mastery[3] = new setmastery(Skills,Attributes)