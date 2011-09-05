# Phrase: Furl basic [furl http url uri]
#===========================================================
# http://blog.livedoor.jp/xaicron/archives/51324535.html

use strict;
use warnings;
use 5.0100;
use Furl;

my $furl = Furl->new(agent => 'Madoka-Magica/chu-2');

# hash を渡すスタンダードな方法
my $res = $furl->request(
    method => 'GET',
    url    => 'http://example.com',
);
say $res->is_success;
say $res->code;
say $res->status;
say $res->message;
say $res->status_line;
say $res->content_type;
say $res->content_length;
say $res->content;

# HTTP::Requset も渡せる
use HTTP::Request;
my $req = HTTP::Request->new(GET => 'http://example.com');
my $res2 = $furl->request($req);

# Phrase: Encode::Guess [encode decode guess]
#===========================================================

use strict;
use warnings;
use Encode::Guess;

my $content = 'multibyte string';

my $enc = guess_encoding($content, qw/euc-jp shiftjis 7bit-jis/);
$content = Encode::decode($enc->name, $content);
$content = Encode::encode('utf-8', $content);

# Phrase: get subroutine's name [caller]
#===========================================================
# http://d.hatena.ne.jp/perlcodesample/20080424/1209042419

use strict;
use warnings;

### 実行している関数( 正確には、サブルーチン )の名前を取得する。
#       # caller 関数使います。引数に 0を与えた、戻り値の4番目の要素が関数名になります。
#       ( caller 0 )[3]

print "1: 実行している関数の名前を取得する。\n";
func_name();

sub func_name{
    my $this_func_name = ( caller 0 )[3];
    print $this_func_name, "\n"; # caller 関数の引数に 0 を指定すると
    print "\n";                  # 自分自身の関数の情報が、取得できる。
                                 # 4番目( 要素番号は 3)に関数名が、入っている。
}

print "2: パッケージ名のない関数名を取得する。\n";
func_name_none_package();

sub func_name_none_package{
    my $this_func_name = ( caller 0 )[3];
    $this_func_name =~ s/.*:://;
                                # ↑ 正規表現で、:: までを取り除く。
    print $this_func_name, "\n\n";

}

print "3: 関数名取得をサブルーチン化する。\n";
test1();

sub test1{
    print get_func_name(), "\n";
}

sub get_func_name{
    my $this_func_name = ( caller 1 )[3]; # caller関数の引数に、1 を指定すると
    $this_func_name =~ s/.*:://;          # 呼び出し元の関数の情報を取得できる。
    return $this_func_name;

}

# Phrase: template format IF [xslate tterse if]
#===========================================================
[% IF hoge %]
<p>hoge</p>
[% ELSIF fuga %]
<p>futa</p>
[% ELSE %]
<p>piyo</p>
[% END %]

# Phrase: template format FOREACH [xslate tterse foreach loop]
#===========================================================
[% FOREACH obj IN array_ref_objs %]
<p>[% obj.id %]</p>
[% END %]

# Phrase: template format INCLUDE [xslate tterse include file]
#===========================================================
[% INCLUDE 'footer.inc' %]

# Phrase: template format MACRO BLOCK [xslate tterse macro block]
#===========================================================
[% MACRO hoge_block BLOCK -%]
<script>
alert('m9');
</script>
[% END -%]

[% INCLUDE 'hoge.inc' WITH
    hoge = hoge_block()
%]

# hoge.inc
[% hoge %]

# Phrase: template format SET [xslate tterse set]
#===========================================================
[% SET obj = hoge_obj.fuga_obj %]
<p>[% obj.id %]</p>

