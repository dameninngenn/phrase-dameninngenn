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

