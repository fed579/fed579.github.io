#!/usr/local/bin/perl

#┌─────────────────────────────────
#│ FullPath Viewer : fullpath.cgi - 2011/09/21
#│ Copyright (c) KentWeb
#│ http://www.kent-web.com/
#└─────────────────────────────────
#┌─────────────────────────────────
#│ [注意事項]
#│ 1. このスクリプトはフリーソフトです。このスクリプトを使用した
#│    いかなる損害に対して作者は一切の責任を負いません。
#│ 2. 設置に関する質問はサポート掲示板にお願いいたします。
#│    直接メールによる質問は一切お受けいたしておりません。
#└─────────────────────────────────

# モジュール宣言
use strict;
use CGI::Carp qw(fatalsToBrowser);

# バージョン情報
my $ver = 'FullPath Checker v1.6';

# 初期化
my %path;

# 第１チェック
eval{ $path{1} = `pwd`; };
if ($@ || $path{1} eq "") { $path{1} = 'unknown'; }

# 第２チェック
$path{2} = $0 =~ /^(.*[\\\/])/ ? $1 : 'unknown';

# 第３チェック
$path{3} = $ENV{SCRIPT_FILENAME} || 'unknown';

print <<EOM;
Content-type: text/html

<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=shift_jis">
<meta http-equiv="content-style-type" content="text/css">
<style type="text/css">
<!--
body { font-size:80％; }
dd { color: #dd0000; font-family:Verdana,Helvetica,Arial; }
p { font-family:Verdana,Helvetica,Arial;font-size:10px;text-align:center; }
-->
</style>
<title>$ver</title>
</head>
<body>
<h3>この「ディレクトリ」のフルパスチェックの結果は以下のとおりです。</h3>
- 「unknown」と出る場合には取得に失敗した場合です -
<dl>
	<dt>第1チェック</dt>
	<dd>$path{1}</dd>
	<dt>第2チェック</dt>
	<dd>$path{2}</dd>
	<dt>第3チェック</dt>
	<dd>$path{3}</dd>
</dl>
<!-- 著作権表\示（削除不可）-->
<p>- <a href="http://www.kent-web.com/">Fullpth Viewer</a> -</p>
</body>
</html>
EOM

