if(Posts.find().count() === 0) {

  /*
  function readPic(infile)  {
      var fs = Npm.require('fs');
      var path = Npm.require('path');
      var base = path.resolve('.');
      var deployLoc = 'server/'
      var data = fs.readFileSync(path.join(base, deployLoc, infile)); 
      var tp = data.toString('base64');
      return  'data:image/jpeg;base64,' + tp;
  }*/

  console.log('FIXTURING');
  
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });  
   var sacha = Meteor.users.findOne(sachaId);
  
  var id1 = Posts.insert({
    userId: sacha._id,
    username: sacha.profile.name,
    title: 'Beautiful woman',
    text: 'Samstag, 27.07. im Zaza. Meine Freundin und ich lernten euch zwei kennen. Philipp und Nils aus Wunstorf, Studenten in Göttingen. Philipp hat dunkelblonde Haare, Bart studiert Lehramt. Nils ist groß, hat braune Haare und studiert BWL. Beide sind 22 Jahre alt. Leider haben wir uns zur späten Stunde aus den Augen verloren.. In der Hoffnung, dass euch vielleicht jemand kennt oder sogar ihr selbst euch angesprochen fühlt, probieren wir es auf diesem Wege. :)',
    locs: { lat : 51.049893, lng : 13.739251 },
    submitted: new Date().getTime(),
    upvoters: [], 
    votes: 0,
    commentsCount: 2
  });
  
  var id2 = Posts.insert({
    userId: sacha._id,
    username: sacha.profile.name,
    title: 'Edeka for live',
    text: 'EDEKA im Olympia Einkaufszentrum MÜNCHEN: 24. Juli 2013 im Olympia Einkaufszentrum München: Wir sahen uns im EDEKA im OEZ (Olympia-Einkaufszentrum) am 24.7. 2013 gegen 18 Uhr. Damit du weißt, wer gemeint ist: Du (m) trugst eine rote lange Hose, ein helles Hemd, eine schwarze Umhängetasche, schwarze Schuhe. Dunkle Haare. Dunkle Augen. Meine Beschreibung kann ich mir schätzungsweise sparen - Du wirst schon wissen, wer das hier schreibt (ich trug ein schwarz-weißes Kleid ...). Wir sind uns später auch nochmal im Vorbeigehen begegnet - ebenfalls im EG vom OEZ. Würde mich sehr freuen, von Dir zu lesen!',
    locs: { lat : 51.030761, lng : 13.730078 },
    submitted: new Date().getTime(),
    upvoters: [], 
    votes: 0,
    commentsCount: 1
  });

  var id3 = Posts.insert({
    userId: tom._id,
    username: tom.profile.name,
    title: 'Audi-Fahrer',
    text: 'Hey, ich (w, 21) suche den netten, gut aussehenden Audi-Fahrer mit dem Kennzeichen MYK - S. Wir sind uns letztes Jahr beim Autokorso der Fußball-EM in Koblenz diverse Male über den Weg gefahren.  Habe mir seit dem dein Kennzeichen gemerkt und dich vergangene Woche in Koblenz an der Ampel wiedergesehen. Würde gerne wissen wer du bist.  Falls du dich angesprochen fühlst darfst du dich gerne melden ',
    locs: { lat : 51.053697, lng : 13.696175 },
    submitted: new Date().getTime(),
    upvoters: [], 
    votes: 0,
    commentsCount: 0
  });

  var id4 = Posts.insert({
    userId: tom._id,
    username: tom.profile.name,
    title: 'Audi-Fahrer',
    text: 'Hey, ich suche nach dem Mädel das ich am heutigen Montag 05.08. gegen 16:00 an der Haltestelle "Am Seelberg" in Hannover-Mißburg getroffen habe. Du warst ca 165-170cm und ich fand dich auf Anhieb sehr süß. Ich hatte aber keine Idee wie ich dich ansprechen sollte daher habe ich einerseits zu lange gewartet und andererseits (mit einem iPhone in der Hand) gefragt "Wie komme ich am besten zum Hbf?". Wie konnte ich nur sowas fragen?^^ Netterweise hast du mir gesagt welche Busse und Züge ich nehmen muss. Unsere Wege haben sich getrennt als die Busse 124 & 125 kamen ohne dass ich nach deinem Namen oder Nummer gefragt habe. Ich habe ja erwähnt dass ich eventuell dort hin ziehe, aber das steht noch auf der Kippe. Nicht desto trotz würde ich gerne ein bisschen mit dir quatschen und was trinken und vielleicht kannst du mir ein bisschen Hannover zeigen. Ich hoffe ich finde dich über diesem Weg und wir sehen uns wieder. LG.chichte..Hey, ich suche nach dem Mädel das ich am heutigen Montag 05.08. gegen 16:00 an der Haltestelle "Am Seelberg" in Hannover-Mißburg getroffen habe. Du warst ca 165-170cm und ich fand dich auf Anhieb sehr süß. Ich hatte aber keine Idee wie ich dich ansprechen sollte daher habe ich einerseits zu lange gewartet und andererseits (mit einem iPhone in der Hand) gefragt "Wie komme ich am besten zum Hbf?". Wie konnte ich nur sowas fragen?^^ Netterweise hast du mir gesagt welche Busse und Züge ich nehmen muss. Unsere Wege haben sich getrennt als die Busse 124 & 125 kamen ohne dass ich nach deinem Namen oder Nummer gefragt habe. Ich habe ja erwähnt dass ich eventuell dort hin ziehe, aber das steht noch auf der Kippe. Nicht desto trotz würde ich gerne ein bisschen mit dir quatschen und was trinken und vielleicht kannst du mir ein bisschen Hannover zeigen. Ich hoffe ich finde dich über diesem Weg und wir sehen uns wieder. LG.chichte..',
    locs: { lat : 51.023697, lng : 13.696175 },
    submitted: new Date().getTime() - 7 * 3600 * 1000,
    upvoters: [], 
    votes: 0,
    commentsCount: 0
  });

  Comments.insert({
    postId: id1,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date().getTime() - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  }); 
  
  Comments.insert({
    postId: id2,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date().getTime() - 4 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });    
  
  Comments.insert({
    postId: id1,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date().getTime() - 3 * 3600 * 1000,
    body: 'fuck yeah'
  });    

  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Hallo, ich",text: "Hallo, ich suche den sympathischen jungen, der soeben im Blau war. Du warst mit zwei Freunden da. Du hattest Schwarze Haare, sowie ein schwarzes t Shirt an. Mir gefiel deine Tanzart und dein sympathisches Lachen. Du warst ca. 1.80m groß und warst schö gebräunt. Woran ich mich erinner war, dass du in Dudweiler wohnst und an der Uni Jura studierst. Nebenbei, du trugst ein Boxerschnitt. Ich würde mich freuen, wenn jemand dich kennt. Ich meine, dass du Perser oder so warst!",locs: { lat: 53.5235665932873,lng: 13.4235665932873},submitted: new Date().getTime(),upvoters: [],votes: 0,commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Hey...  ge",text: "Hey...  gesucht wird der nette sympathische junge Mann (Fußballer) aus St. Ingbert, der am Freitag (02.08) in der Shotzbar mit mir ein Blind Date dank seiner Fußball Kollegen hatte. ",locs: { lat: 53.302648310318,lng: 13.202648310318},submitted: new Date().getTime() - 8 * 3600 * 1000,upvoters: [],votes: 0,commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Hallo spot",text: "Hallo spotted-team, bitte um Hilfe : Ich (w,17) suche dich : du bist männlich, ca.18-20 Jahre alt und oft im nachtwerk mülheim kärlich. Du hälts dich dort oft im Hip-Hopraum auf, außerdem trägst du oft eine Jeansjacke und bist scheinbar ein guter Tänzer.    Danke schon mal im voraus ",locs: { lat: 47.857949109775,lng: 6.75794910977499},submitted: new Date().getTime() - 7 * 3600 * 1000,upvoters: [],votes: 0,commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: " ich versu",text: " ich versuchs nochmal!  kennt jemand den typ aus dem laden yeans hall im forum,der alek oder so heißt &amp; kann mir sagen ob der facebook hat,oder ich muss mich leider umbringen,bitte danke ",locs: { lat: 52.7258347286497,lng: 12.6258347286497},submitted: new Date().getTime() - 1 * 3600 * 1000,upvoters: [],votes: 0,commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: " Hi Vllt f",text: " Hi Vllt findet man hier ja auch jemand aus dem cineplex in Limburg   Du (w) blonde haare mit paar dunklen Strähnen (sah man im Kino nicht so gut) und einer Jeans-hotpants warst um kurz vor 9 in dem Film ich einfach unverbesserlich 2 mit mehreren Freunden und saßt in der ersten Reihe. Ein Blick von dir hatte schon gereicht und mich umgehauen. Wäre schö wenn mir jemand helfen könte.  Danke schonmal ",locs: { lat: 49.5841743921787,lng: 8.48417439217874},submitted: new Date().getTime(),upvoters: [],votes: 0,commentsCount: 0});

  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Liebe ",text: "Liebe S 31, leider musste ich dich heute schmerzlich vermissen, denn du bist unangekündigt nicht zu unserer morgendlichen Verabredung um 6:20 Uhr am S-Bahnhof Harburg Rathaus nicht erschienen. Dies hat mich sehr traurig gemacht und es war nur ein kleiner Trost, dass ich in einer Stehsauna mit gefühlten 35 Grad in deiner Schwester S 3 Richtung Hauptbahnhof fahren durfte. Natürlich kannst du nichts für den Kabelklau, aber zumindest deine Schwester S 3 hätte sich doch auf neun Wagen verlängern könen, wenn du schon nicht zu unserer Verabredung erscheinen konntest. Dafür hätte dein Vorgesetzter, der HVV, doch wirklich einmal achten könen! Bitte sei doch sehr schnell wieder für uns da! Ich verstehe ja, dass auch du mal Urlaub brauchst, zumal du und die S 3 ja sowieso immer viel zu überlastet seid. Aber du kannst uns zahlende Fahrgäste nicht einfach so im Stich lassen. Ich hoffe, dich morgen zur gewohnten Zeit wiederzusehen!",locs: { lat: 51.046709,lng: 13.714199},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "hey. ich s",text: "hey. ich suche jemanden, den ich nicht an der Uni kennengelernt habe und der nicht mal in Bochum studiert, aber vielleicht kann mir jemand helfen. Ich (Bine) habe ihn (Marc) am 29.7. im Oberbayern auf Malle kennengelernt und wir waren bis zu meiner Abreise (morgens) zusammen unterwegs. Er ist Soldat bei der Bundeswehr, ist in Frankreich oder an der Grenze stationniert und kommt ursprünglich aus Bochum. Was auf Malle ist bleibt auf Malle, weiß ich schon. Aber da ich eine Woche später immer noch an den Abend denke, dachte ich, einen Versuch ist es wert. Also wenn ihn jmd kennt, bitte melden ",locs: { lat: 48.6446342351123,lng: 7.54463423511229},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Ich habe i",text: "Ich habe ihn, Marc, im Oberbayern auf Malle kennengelernt, einen wirklich schöen Abend miteinander verbracht und keine Nummern ausgetauscht. Was auf Malle ist, bleibt auf Malle. Aber mir geht der Abend nicht aus dem Kopf, also versuch ich es hier mal.Er ist blond, Soldat bei der Bundeswehr, in (oder an der Grenze zu Frankreich) stationniert. Er kommt urprünglich aus Bochum und fährt dort wohl Ã¶fter mal hin. Mein Name ist Bine, und falls ihn jmd kennt wäre das wirklich toll!",locs: { lat: 52.3640863064509,lng: 12.2640863064509},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "wir haben ",text: "wir haben uns am Sonntag (04.08.) im Zug von Lichtenfels nach Jena gegenüber gesessen - kurz vor Jena ist noch eine Gruppe Mädels von einem Junggesellinnenabschied eingestiegen - da gabs viel zu grinsen :)Beim Aussteigen hab ich leider die Gelegenheit verpasst, dich anzusprechen - wenn du das hier liest, meld dich ruhig ;)",locs: { lat: 49.0835388271527,lng: 7.98353882715271},submitted: new Date().getTime() - 6 * 3600 * 1000,upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "hey ich su",text: "hey ich suche das mädchen, das in st ingbert bei der firma microbig arbeitet, ihr familienname lautet baykara, fährt einen silbernen polo aus Homburg. Wer sie kennt bitte melden",locs: { lat: 48.1806315716266,lng: 8.08063157162658},submitted: new Date().getTime() - 12 * 3600 * 1000,upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Ich suche ",text: "Ich suche die junge Dame mit dem sympathischen Lächeln die mich (den Pizzafahrer) am 05.08 gegen acht nach dem Weg zum Goethering gefragt hat, weil sie noch neu in der Stadt ist. Vielleicht hast du ja Lust dir bei einem Drink mal von mir die Stadt zeigen zu lassen ",locs: { lat: 52.8957377435154,lng: 12.7957377435154},submitted: new Date().getTime() - 3 * 3600 * 1000,upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Hallo zusa",text: "Hallo zusammen, ich suche den hübschen Lockenkopf mit der Rot-Weiß-RÃ¶ttgen-Jacke und den blauen Sportschuhen, der mir im Bus (20 Richtung Uni) schräg gegenüber saß. Du bist gegen 18.12 an der Elisabethkirche ausgestiegen. Ich find dich echt attraktiv, trotz deiner Alditüte ;) und deshalb würd ich dich gern näher kennen lernen. Hätte dich auch gern unter einem Vorwand angeprochen, aber in Anbetracht das ich kein Mädchen, sondern nen Kerl bin, hab ich das Mal sein gelassen. Bei der Anzahl an Zuschauern wäre das nur peinlich geworden! :D  Also, wenn du ähnlich denkst, quatsch mich das nächste mal einfach an. Frag nach der Uhrzeit etc. Irgendein Vorwand wird dir schon einfallen. Wenn nicht, siehe es als Kompliment. Nicht jeder ?Hetero? wird von einem ?Homo? angemacht, auch wenn viele Heteros das befürchten.  Männliche Selbstüberschätzung, auch ich kenne das. ",locs: { lat: 51.3794768674204,lng: 11.2794768674204},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: " Warst ges",text: " Warst gestern im Donaubad mit 2 Freundinnen.. hattest schwarze Haare und einen blauen Bikini, eine deiner Freundinnen ist blond, die andere brunette. Ihr seid ziemlich nah am Schwimmerbecken gelegen  wär sicher schö, wenn wir beide mal in der Sonne faulenzen könen...",locs: { lat: 51.8703257157795,lng: 11.7703257157795},submitted: new Date().getTime() - 4 * 3600 * 1000,upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Hallo es h",text: "Hallo es handelt sich hier zwar nicht ums Nachtleben, aber suche trotzdem jemanden....habe Ihn im Dudweiler Freibad im Juli mehrmals gesehen.Weiss nur das er Mario heisst und ein Kind hat vllt auch mehrere??? Und einer seiner Kollegen hat immer eine weisse Sonnenbrille an? Wer kennt Ihn? Ist er Single !",locs: { lat: 52.8518666764963,lng: 12.7518666764963},submitted: new Date().getTime() - 2 * 3600 * 1000,upvoters: [],votes: 0, commentsCount: 0});
  Posts.insert({userId: tom._id,username: tom.profile.name,title: "Lieber Unb",text: "Lieber Unbekannter von der Straßenbahnhaltestelle Hauptbahnhof Nord,Ich bin am Sonntag den 04.08. um ca. 21:15 Uhr in der Linie 8 Richtung Helleru an dir vorbei gefahren. Ich saß in der Bahn mit riesem Koffer, ich hatte ein weißes T-Shirt an und trug eine Brille mit schwarzem Rahmen, du hattest ein weißes Shirt mit großer Schrift an und soweit ich mich erinnern kann schwarze KopfhÃ¶rer auf. Unsere Blicke trafen sich, so denke ich! Vielleicht kannst du mir das nächste mal beim Koffer tragen helfen oder man trifft sich vorher mal auf einen Kaffee!? Liebe Grüße die Unbekannte",locs: { lat: 53.4617206755382,lng: 13.3617206755382},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});
  
  Posts._ensureIndex({'locs':'2d'});  
  //ImagePosts.insert({userId: tom._id,username: tom.profile.name, img: readPic('pic1.png'), locs: { lat: 51.045981, lng:13.729134},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});
  //ImagePosts.insert({userId: tom._id,username: tom.profile.name, img: readPic('pic2.png'), locs: { lat: 51.04706, lng:13.746471},submitted: new Date().getTime(),upvoters: [],votes: 0, commentsCount: 0});   
}