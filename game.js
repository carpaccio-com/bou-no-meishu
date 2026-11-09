(function(){
'use strict';

/* ---------- 言語（日本語・英語） ---------- */
const LANG_KEY='bou-no-meishu-lang';
let LANG_SET='';try{LANG_SET=localStorage.getItem(LANG_KEY)||'';}catch(e){}
const LANG=LANG_SET==='en'?'en':'ja';
const EN_L={"/秒": "/s", "歩兵": "Infantry", "武器なし": "Unarmed", "槍兵": "Spearmen", "騎兵に強い": "Strong vs cavalry", "盾兵": "Shieldmen", "打たれ強く弓に強い": "Tough, strong vs arrows", "弓兵": "Archers", "遠くから撃つ": "Shoots from afar", "騎兵": "Cavalry", "速い・弓兵に強い": "Fast, strong vs archers", "秒": "s", "新兵": "Recruit", "兵卒": "Private", "精兵": "Elite", "古参": "Veteran", "英雄": "Hero", "ポポ村": "Popo Village", "小村": "Hamlet", "牧歌的な村。兵は鍬を持って戦う。": "A pastoral village. Its soldiers fight with hoes.", "ルクの里": "Ruku Hollow", "小国": "Small state", "山あいの里。": "A hamlet in the mountains.", "ネムリ公国": "Duchy of Nemuri", "眠そうな公爵が治める。": "Ruled by a sleepy duke.", "ミルの町": "Milltown", "粉ひき小屋の並ぶ町。": "A town lined with flour mills.", "トト自治区": "Toto Commune", "頑固な長老たちの自治区。": "A commune of stubborn elders.", "カルナ王国": "Kingdom of Karna", "中小国": "Minor power", "川沿いの王国。商人が多い。": "A riverside kingdom full of merchants.", "ソラ藩国": "Sola March", "高原の藩国。風が強い。": "A windy highland domain.", "灰の連合": "Ash League", "火山灰の地の部族連合。": "A tribal league on volcanic ash.", "イズミ共和国": "Republic of Izumi", "泉の湧く共和国。": "A republic of springs.", "ベルガ辺境伯領": "Margraviate of Berga", "中国": "Mid power", "国境を守ってきた古い家。": "An old house that has long guarded the border.", "ヴェルト帝国": "Welt Empire", "野心ある若い帝国。": "A young, ambitious empire.", "北海同盟": "North Sea Alliance", "港町の同盟。冬が長い。": "An alliance of harbor towns. Long winters.", "翠の森林国": "Emerald Woodland", "深い森に隠れた国。": "A realm hidden in deep forest.", "オルド騎馬国": "Ordo Horse Clans", "草原を駆ける騎馬の民。": "Riders of the open steppe.", "塩の都市連合": "Salt City League", "塩の交易で栄える都市群。": "Cities grown rich on the salt trade.", "砂漠の大国ザハル": "Desert Realm of Zahar", "大国": "Great power", "砂の海を渡る大国。": "A great power that crosses the sea of sand.", "鉄の帝国グラン": "Iron Empire of Gran", "鉄の鉱山を握る軍事国家。": "A military state that holds the iron mines.", "霧の王朝": "Mist Dynasty", "霧の谷に千年続く王朝。": "A dynasty a thousand years old in a misty valley.", "双頭鷲帝国": "Twin-Eagle Empire", "二人の皇帝が並び立つ。": "Two emperors rule side by side.", "黒曜の神聖国": "Obsidian Theocracy", "黒い神殿を戴く神権国家。": "A theocracy crowned by a black temple.", "雪原連邦": "Snowfield Federation", "覇権国": "Hegemon", "雪原の諸邦をまとめた連邦。": "A federation of the snowfield states.", "大海洋王国": "Great Ocean Kingdom", "海を制した王国。": "A kingdom that rules the sea.", "東方大帝国": "Great Eastern Empire", "東の果ての大帝国。": "A great empire at the eastern edge of the world.", "白銀大帝国": "Great Silver Empire", "大陸の半分を従える最大の国。": "The largest realm, ruling half the continent.", "コロの浜": "Koro Beach", "漁師たちの浜の集落。": "A beach settlement of fishermen.", "ヤナ郷": "Yana Weir", "簗で魚をとる川辺の郷。": "A riverside village that fishes with weirs.", "フクロウ谷": "Owl Valley", "夜に働く職人の谷。": "A valley of craftsmen who work at night.", "石橋の町": "Stonebridge", "古い石橋で栄えた町。": "A town that grew around an old stone bridge.", "ラタン王国": "Kingdom of Rattan", "籐細工を売る小さな王国。": "A small kingdom selling rattan crafts.", "赤土の部族": "Red Earth Tribe", "赤い大地に住む部族。": "A tribe of the red earth.", "湖上都市リム": "Lake City of Rim", "湖に浮かぶ都市国家。": "A city-state floating on a lake.", "羊飼い連邦": "Shepherd Federation", "高原の牧羊の民の連邦。": "A federation of highland shepherds.", "銅鐸公国": "Bronze Bell Duchy", "銅の鐘を鋳る公国。": "A duchy that casts bronze bells.", "月影の王国": "Moonshadow Kingdom", "夜祭りで名高い王国。": "A kingdom famed for its night festivals.", "琥珀帝国": "Amber Empire", "琥珀の交易を握る帝国。": "An empire that controls the amber trade.", "天空の聖王国": "Holy Sky Kingdom", "山上に都を構える聖王国。": "A holy kingdom with its capital on a mountaintop.", "始まりの大陸": "First Continent", "霧の群島": "Misty Isles", "黒岩島": "Blackrock Island", "南の大島": "Great Southern Isle", "氷の大陸": "Ice Continent", "炎の諸島": "Fire Isles", "翡翠の大陸": "Jade Continent", "嵐の大島": "Storm Isle", "アル": "Al", "ベル": "Bel", "カ": "Ka", "ドラ": "Dra", "エル": "El", "フィ": "Fi", "ガル": "Gal", "ハル": "Hal", "イル": "Il", "ジャ": "Ja", "ク": "Ku", "ラ": "Ra", "マル": "Mal", "ノ": "No", "オル": "Ol", "パ": "Pa", "リ": "Ri", "サ": "Sa", "タ": "Ta", "ウル": "Ul", "ヴァ": "Va", "ゼ": "Ze", "ミ": "Mi", "ロ": "Ro", "シ": "Shi", "ネ": "Ne", "ト": "To", "ユ": "Yu", "ン": "n", "ス": "s", "ド": "d", "ナ": "na", "ム": "m", "リア": "ria", "ガ": "ga", "ザ": "za", "レ": "re", "キア": "kia", "ディア": "dia", "ロン": "ron", "ヴェ": "ve", "村": "Village", "の里": "Hollow", "郷": "Shire", "自治区": "Commune", "公国": "Duchy", "王国": "Kingdom", "共和国": "Republic", "辺境伯領": "March", "連合": "League", "帝国": "Empire", "大王国": "High Kingdom", "神聖国": "Theocracy", "連邦": "Federation", "大帝国": "Great Empire", "覇王国": "Overlord Kingdom", "大連邦": "Grand Federation", "入り江に港を構える国。": "A realm with a harbor in a quiet cove.", "霧に包まれた丘の国。": "A land of hills wrapped in mist.", "鉱山で栄える山の国。": "A mountain realm grown rich from its mines.", "広い麦畑を持つ平野の国。": "A lowland realm of wide wheat fields.", "騎馬の民が治める草原の国。": "A grassland realm ruled by horse riders.", "古い神殿の残る森の国。": "A forest realm with ancient temples.", "塩田の広がる海辺の国。": "A seaside realm of salt pans.", "高い城壁で守られた城塞都市。": "A fortress city behind high walls.", "川をはさんで争ってきた国。": "A realm long at war across its river.", "北の風が吹きつける寒い国。": "A cold realm battered by northern winds.", "島の主": "Island lord", "農場": "Farm", "食料 +12/秒": "Food +12/s", "市場": "Market", "金 +0.5/秒": "Gold +0.5/s", "城壁強化": "Wall upgrade", "城壁の耐久 +200、矢倉の威力 +2": "Wall durability +200, tower power +2", "歩兵舎": "Infantry barracks", "槍兵舎": "Spear barracks", "盾兵舎": "Shield barracks", "弓兵舎": "Archery range", "厩舎": "Stables", "徴兵令": "Conscription", "一回のタップで生まれる兵 +1": "+1 soldier per tap", "鉄の鍬": "Iron hoe", "「耕す」の食料 ×2": "\"Till\" food ×2", "練兵場": "Drill ground", "訓練の費用 −15%": "Training cost −15%", "隊列訓練": "Formation drill", "歩兵の戦力 +20%": "Infantry power +20%", "鉄の槍": "Iron spears", "槍兵の戦力 +15%": "Spearman power +15%", "大盾": "Tower shields", "盾兵の耐久 +25%": "Shieldman toughness +25%", "長弓": "Longbows", "弓兵の射程 +20%": "Archer range +20%", "軍馬の育成": "Warhorse breeding", "騎兵の速さ +20%・突撃の一撃 ×1.5": "Cavalry speed +20%, charge ×1.5", "輪作": "Crop rotation", "農場の食料 +50%": "Farm food +50%", "商人ギルド": "Merchant guild", "交易の値段 +30%・市場の金 ×2": "Trade prices +30%, market gold ×2", "石造りの城壁": "Stone walls", "城壁の耐久 +50%": "Wall durability +50%", "強弓の矢倉": "Heavy-bow towers", "矢倉の威力 ×2": "Tower power ×2", "軍医": "Field surgeons", "負傷兵になる割合 20%→35%・復帰が速い": "Wounded instead of killed 20%→35%, faster recovery", "将校学校": "Officer school", "訓練の費用 −25%": "Training cost −25%", "傭兵団との契約": "Mercenary contract", "傭兵の値段 −30%": "Mercenary price −30%", "斥候": "Scouts", "勝率の試算が正確に（試算の回数が増える）・宣戦の保留 +1回": "More accurate win estimates (more simulations), +1 war delay", "近衛隊": "Royal escort", "盟主の強さ ×2": "Sovereign strength ×2", "穏やかな大陸": "Calm continent", "特別な決まりはない": "No special rules", "霧で弓の射程 −30%": "Mist: archer range −30%", "岩場で騎兵の速さ −35%": "Rocky ground: cavalry speed −35%", "雨で全員の速さ −15%・盾兵の耐久 +20%": "Rain: all speed −15%, shieldman toughness +20%", "雪で全員の速さ −20%・騎兵はさらに −20%": "Snow: all speed −20%, cavalry a further −20%", "乾いた風で拠点が燃えやすい（拠点への攻撃 +30%）": "Dry winds: bases burn easily (damage to bases +30%)", "深い森で弓の射程 −20%・歩兵の戦力 +20%": "Deep forest: archer range −20%, infantry power +20%", "嵐で全員の速さ −15%・弓の射程 −15%": "Storms: all speed −15%, archer range −15%", "好戦的": "Warlike", "よく宣戦してくる": "Declares war often", "商人": "Mercantile", "食料を高く買い、協定が安い": "Pays more for food, cheaper pacts", "臆病": "Timid", "めったに攻めてこない": "Rarely attacks", "穏健": "Moderate", "ふつう": "Normal", "やさしい": "Easy", "むずかしい": "Hard", "はじめての勝利": "First victory", "侵攻で1回勝つ": "Win an invasion", "城を守る者": "Castle keeper", "防衛戦で1回勝つ": "Win a defense", "連合を退けて": "Coalition breaker", "連合軍の防衛戦に勝つ": "Win a defense against a coalition", "千人斬り": "Thousand slain", "敵兵を合計1,000人倒す": "Defeat 1,000 enemy soldiers in total", "万夫不当": "Unstoppable", "敵兵を合計10,000人倒す": "Defeat 10,000 enemy soldiers in total", "大軍の勝利": "Victory over a horde", "1,000人以上の敵がいる戦いに勝つ": "Win a battle against 1,000+ enemies", "三方面作戦": "Three fronts", "3か国へ同時に侵攻する": "Invade 3 nations at once", "英雄の軍": "Army of heroes", "英雄を100人そろえる": "Have 100 heroes", "学問の国": "Land of learning", "研究を5つ終える": "Finish 5 research projects", "海を越えて": "Across the sea", "島を1つ統一する": "Unify an island", "島の主を討つ": "Lord slayer", "島の主を属国にする": "Make an island lord your vassal", "盟主自ら": "Leading from the front", "盟主が出陣した戦いに勝つ": "Win a battle the sovereign fought in", "王朝の継承": "Succession", "王朝を次の代へ引き継ぐ": "Pass the dynasty to the next generation", "あなたは小さな国の盟主となった。民はひとり。戦場をタップして兵を集めよ。": "You have become the sovereign of a tiny realm with a single subject. Tap the battlefield to raise soldiers.", "属国": "Vassal", "協定国": "Pact", "ほか": " and ", "か国の連合軍": " allied nations", "、城壁を打ち破って": " by breaching the walls", "撤退": "retreated", "野営地を焼かれて失敗": "failed: the camp was burned", "失敗": "failed", "野営地を焼かれた": "Camp burned", "敗北": "Defeat", "城門を出て戦う": "the castle gate", "の戦場へ出陣した": " battlefield", "盟主が出陣！": "The sovereign rides out!", "撃退": "Repelled", "勝利": "Victory", "島の主を討った！ 次の島へ渡れる": "Island lord defeated! You can sail to the next island", "兵が十人を超えた。外交タブの地図からポポ村を選んでみよう。": "You have more than ten soldiers. Try selecting Popo Village on the Diplomacy tab map.", "無料": "Free", "出陣できる兵がいない。徴兵するか、戦いが終わるのを待とう": "No soldiers available. Recruit more or wait for a battle to end", "・": ", ", "連合軍の宣戦布告": "Coalition declares war", "宣戦布告": "Declaration of war", "これ以上は延ばせない": "Cannot delay any longer", "保留中も内政・軍団の操作や他国への遠征はできる。期限が来ると敵は攻めてくる（防衛戦の最中なら、その戦いが終わってから）。戦場をタップした兵は援軍として加わる。": "While delayed you can still manage your realm and invade others. When time runs out the enemy attacks (after the current defense, if one is under way). Soldiers you tap onto the field join as reinforcements.", "いまの防衛戦が終わり次第、迎え撃つ": "Fight as soon as the current defense ends", "和平が成立した": "Peace agreed", "島を統一": "Island unified", "全員": "All", "その兵はいま戦いに出ている": "Those soldiers are in battle right now", "上陸地": "Landing", "自国": "Home", "建てる": "Build", "改良する": "Upgrade", "前進": "Advance", "門の前で守る": "Hold the gate", "拠点を狙う": "Target base", "すべて": "All", "戦い": "War", "外交": "Diplomacy", "内政": "Realm", "倒した敵兵": "Enemies defeated", "失った兵": "Soldiers lost", "侵攻の勝ち": "Invasions won", "侵攻の負け": "Invasions lost", "防衛の勝ち": "Defenses won", "防衛の負け": "Defenses lost", "連合軍に勝った": "Coalitions beaten", "最大の勝利（敵の人数）": "Biggest victory (enemies)", "雇った傭兵": "Mercenaries hired", "起きた反乱": "Rebellions", "他国どうしの併合": "Annexations between others", "統一した島": "Islands unified", "コピーした。": "Copied.", "自動でコピーできなかった。選ばれた文字を手でコピーしてください。": "Could not copy automatically. Please copy the selected text by hand.", "読み込めなかった。書き出した文字列を、全部そのまま貼りつけてください。": "Could not load. Paste the whole exported text exactly as it is.", "このブラウザでは保存できなかった（プライベートモードなど）。": "This browser could not save (private mode or similar).", "読み込んだ。画面を読み込み直します…": "Loaded. Reloading the page…", "もう一度押すと次の代へ（島は最初から）": "Press again to pass to the next generation (islands restart)", "王朝を次の代へ": "Next generation", "軽い": "Light", "重い": "Heavy", "新しい国をおこした。": "You founded a new realm.", "最初からやり直す": "Start over", "もう一度押すと消去されます": "Press again to erase everything", "本国": "Home", "防衛戦": "Defense", "勝": "W", "敗": "L", "退": "R", "宣戦布告に答える（迎え撃つ・保留・和平金）": "Answer the declaration of war (fight, delay or pay for peace)", "内政タブで農場を建てる（食料が毎秒増える）": "Build a farm on the Realm tab (food every second)", "独立国": "Independent", "内政タブで兵舎を建てる（兵が自動で増える）": "Build barracks on the Realm tab (soldiers appear automatically)", "内政タブで研究を始める": "Start research on the Realm tab", "忠誠の低い属国に褒美を与える（反乱を防ぐ）": "Reward a disloyal vassal (prevents rebellion)", "（島の主）": " (island lord)", "島を統一する": "Unify the island", "<b>次の目標</b><span></span><em class=\"go\">› 押すと案内</em>": "<b>Next goal</b><span></span><em class=\"go\">› tap for directions</em>", "【宣戦布告】": "[War declared] ", "【防衛戦】": "[Defending] ", "棒の盟主": "Stick Sovereign", "敵の野営地": "Enemy camp", "敵の城壁": "Enemy wall", "撃退した": "repelled the attack", "勝利した": "won", "城壁を破られた": "wall breached", "敗れた": "lost", "撤退した": "retreated", "倒れた": "Fallen", "出陣中": "In battle", "金と時間で進める": "Costs gold and time", "完了": "Done", "研究中": "Researching", "まだ": "Locked", "研究する": "Research", "金": " gold", "最大": "Max", "負傷兵はいない。倒れた兵の一部は負傷兵として戻ってくる。": "No wounded. Some fallen soldiers come back as wounded.", "最上位": "Top rank", "・島の主": ", island lord", "併合": "Annexed", "協定": "Pact", "和平中": "Truce", "独立": "Free", "（反乱のおそれ）": " (may rebel)", "協定中": "Pact active", "協定を結ぶ": "Sign a pact", "関係+20で可": "Needs relations +20", "和平条約中": "Truce active", "和平条約を結ぶ": "Sign a truce", "関係0以上で可": "Needs relations 0+", "和平条約中は不可": "Not during a truce", "協定中は不可": "Not while in a pact", "この国と戦闘中": "Already at war here", "同時侵攻の上限": "Invasion limit reached", "出陣できる兵がいない": "No soldiers available", "音を出す": "Sound on", "音を消す": "Mute", "件": " entries", "同盟の申し込み": "Alliance offer", "断る": "Decline", "交易の依頼": "Trade request", "売る": "Sell", "援軍の要請": "Call for aid", "和平の提案": "Peace proposal", "和平を結ぶ": "Make peace", "ようこそ、盟主": "Welcome, Sovereign", "あなたは小さな国の盟主。兵を集め、食料と金を増やし、島の国々を従えていく。最初の一歩を順に案内する（2分ほど）。": "You rule a tiny realm. Raise soldiers, grow your food and gold, and bring the island's nations under your banner. This guide walks you through the first steps (about 2 minutes).", "はじめる": "Start", "兵を集める": "Raise soldiers", "農場を建てる": "Build a farm", "「建てる」を押して農場を建てよう。食料が毎秒増える。食料は兵を作るときに使う。": "Press \"Build\" to build a farm. It produces food every second. Food is spent when you make soldiers.", "兵種を選ぶ": "Choose a unit type", "ここで作る兵種を選ぶ。歩兵は無料、ほかは食料を使う。槍は騎兵に、騎兵は弓兵に、弓兵は歩兵と槍兵に強い。": "Choose which unit type to make here. Infantry are free; the others cost food. Spears beat cavalry, cavalry beat archers, archers beat infantry and spearmen.", "国のようす": "Your realm", "兵士・食料・金・城壁・戦力。下の小さな数字は1秒あたりの増え方。数字に指やマウスを置くと説明が出る。": "Soldiers, food, gold, wall and power. The small numbers show the change per second. Hover or hold a number for an explanation.", "国を選ぶ": "Pick a nation", "外交タブの地図で国をタップして選ぶ。まずは自国（斜線）の隣にある、数字（兵力）の小さい国を選ぼう。": "Tap a nation on the Diplomacy map to select it. Start with a neighbor of your realm (hatched) that has a small number (power).", "侵攻する": "Invade", "勝率を確かめて「侵攻する」を押そう。勝率が低いときは、兵を増やすか別の国を選ぶ。": "Check the win chance and press \"Invade\". If the chance is low, raise more soldiers or pick another nation.", "戦いの操作": "Battle controls", "速さ（×2・×4）と、全軍への指示（前進・守る・拠点を狙う）を選べる。戦場をタップすると援軍を送れる。": "Choose the speed (×2, ×4) and an order for the whole army (advance, hold, target base). Tap the battlefield to send reinforcements.", "決着を待つ": "Wait for the outcome", "右上の敵の城壁を0にすれば勝ち。勝つと属国になり、朝貢で金と食料が入る。負けても兵を増やせば再挑戦できる。": "Bring the enemy wall (top right) to 0 to win. The loser becomes your vassal and sends tribute in gold and food. If you lose, raise more soldiers and try again.", "訓練で強くする": "Train to grow stronger", "金と食料を使って訓練すると、階級が上がり一人ひとりが強くなる。兵種ごとの人数もこのタブで見られる。": "Training costs gold and food and raises a soldier's rank, making each one stronger. This tab also shows how many of each type you have.", "あとは自由に": "You're on your own", "迷ったら「次の目標」を押すと、やることの場所へ案内する。ほかの国から宣戦布告が届いたら、迎え撃つか保留しよう。遊び方はいつでも右上の「？ 遊び方」から。": "If you're unsure, press \"Next goal\" and it will show you where to go. When another nation declares war, fight or delay. \"? How to play\" (top right) is always there.", "はじめよう": "Let's go", "次へ": "Next", "光っている所を操作しよう": "Use the highlighted spot", "チュートリアル完了": "Tutorial complete", "チュートリアル完了。健闘を祈る、盟主よ": "Tutorial complete. Good luck, Sovereign", "右上の「？ 遊び方」から、いつでも見られる": "You can open it any time from \"? How to play\" (top right)", "食料が尽きた。兵舎の徴兵が止まっている。": "Food ran out. The barracks have stopped recruiting.", "食料が尽きた！ 兵舎が止まっている": "Out of food! Barracks have stopped", "近衛兵の育成が終わった。": "Royal guard training finished.", "近衛兵がそろった": "Royal guards ready"},EN_T={"{0}秒": "{0}s", "{0}分{1}": "{0}m {1}", "{0}時間{1}分": "{0}h {1}m", "第{0}の大陸": "Continent {0}", "{0} +{1}/秒（一人 食料{2}）": "{0} +{1}/s ({2} food each)", "大陸の奥に新たな国々が見つかった。{0}は{1}か国になった。": "New nations were found deep in the continent. {0} now has {1} nations.", "武器の生産をやめ、兵種ごとに徴兵する制度に改めた。武器工房の建設費{0}金を返し、倉庫の武器{1}個は新兵として配った。": "Weapon production was replaced by recruiting each unit type directly. {0} gold for the workshops was refunded, and {1} stored weapons became new recruits.", "前回は戦いの途中で閉じられた。戦っていた兵は本国に戻っている。": "The game was closed mid-battle last time. The soldiers who were fighting have returned home.", "描画 96 ／ 全 {0} 人": "Showing 96 of {0}", "兵 {0} 人": "Soldiers: {0}", "{0}ほか{1}か国の連合軍": "{0} and {1} allied nations", "{0}が野営地から一列で攻めてくる！ タップで援軍": "{0} marches from its camp! Tap to reinforce", "{0}へ出陣。野営地から一人ずつ出撃する": "Marching on {0}. Soldiers leave the camp one by one", "{0}が{1}に援軍{2}人を送ってきた。": "{0} sent {2} reinforcements to {1}.", "{0}の援軍が到着！ 敵 +{1}人": "{0} reinforcements arrive! Enemy +{1}", "{0}の{1}が援軍{2}人を送ってくれた。": "Your {0} {1} sent {2} reinforcements.", "{0}から味方の援軍 +{1}人！": "Reinforcements from {0}: +{1}!", "{0}の野営地を焼き払い、敵を追い返した。賠償金{1}金を払わせた。兵{2}を失う。": "Burned {0}'s camp and drove the enemy back. They paid {1} gold in reparations. Lost {2} soldiers.", "{0}の兵{1}人を撃退し、賠償金{2}金を払わせた。兵{3}を失う。": "Repelled {1} soldiers of {0} and made them pay {2} gold in reparations. Lost {3} soldiers.", "敵の野営地を焼き払った！ 賠償金 +{0}金": "Enemy camp burned! Reparations +{0} gold", "撃退！ {0}から賠償金 +{1}金": "Repelled! Reparations from {0}: +{1} gold", "{0}に城壁を破られた。金{1}と食料{2}を奪われた。": "{0} breached your wall and took {1} gold and {2} food.", "城壁が破られた… 金 −{0}／食料 −{1}": "Wall breached… gold −{0} / food −{1}", "{0}に侵攻し{1}勝利。兵{2}を失う。賠償金{3}金と食料{4}を得て、{5}は属国となった。生き残りの一部が昇格した。": "Invaded {0}{1} and won. Lost {2} soldiers. Took {3} gold and {4} food in reparations; {5} is now your vassal. Some survivors were promoted.", "勝利！ {0}を征服 ／ 賠償金 +{1}金": "Victory! {0} conquered / reparations +{1} gold", "{0}への侵攻は{1}。兵{2}を失い、敵兵{3}人を討った。": "The invasion of {0} {1}. Lost {2} soldiers and defeated {3} enemies.", "{0}… {1}から退く ／ 兵 −{2}": "{0}… withdrew from {1} / soldiers −{2}", "盟主みずから{0}。": "The sovereign takes the field: {0}.", "盟主が戦場で倒れ、手当てに金{0}を使った。2分は出陣できない。": "The sovereign fell in battle; treatment cost {0} gold. Cannot ride out for 2 minutes.", "盟主が倒れた… 金 −{0}": "The sovereign fell… gold −{0}", "{0}が治めていた{1}も、あわせて属国になった。": "{1}, ruled by {0}, also became your vassal.", "島の主「{0}」を従えた。外交タブから、いつでも次の島へ渡れる。": "The island lord \"{0}\" now serves you. You can sail to the next island from the Diplomacy tab at any time.", "食料が足りない（{0}は一人 食料{1}）": "Not enough food ({0} cost {1} food each)", "<span class=\"tn\">{0}</span><small>{1}</small><small data-c>0人</small>": "<span class=\"tn\">{0}</span><small>{1}</small><small data-c>0</small>", "食料{0}": "Food {0}", "{0}・戦力{1}": "{0}, power {1}", "同時に攻められるのは{0}か国まで": "You can invade at most {0} nations at once", "{0}が{1}と連合を組み、宣戦を布告してきた。": "{0} has joined forces with {1} and declared war.", "{0}が宣戦を布告してきた。": "{0} has declared war.", "{0}と{1}の連合軍": "Coalition of {0} with {1}", "{0}が宣戦を布告してきた。迎え撃つか、開戦を先に延ばすかを決めてください。": "{0} has declared war. Fight now or delay the war.", "{0}との開戦が保留されている（あと{1}秒）。": "War with {0} is delayed ({1}s left).", "{0}（{1}人）": "{0} ({1})", "{0}秒 延ばす（あと{1}回）": "Delay {0}s ({1} left)", "{0}金": "{0} gold", "待機中の兵 {0}人のうち {1}人で守る（保留して期限が来たときも、この割合で出る）": "{1} of your {0} idle soldiers will defend (the same share fights if a delay runs out)", "。近衛兵 {0}人も全員が守りにつく": ". All {0} royal guards defend as well", "{0}との開戦を{1}秒保留した。": "Delayed the war with {0} by {1}s.", "{0}に和平金{1}金を払い、兵を退かせた。": "Paid {0} {1} gold for peace and they withdrew.", "{0}の{1}か国すべてが膝をついた。島を統一した。": "All {1} nations of {0} have bowed. The island is unified.", "船団が{0}に上陸した。{1}の国がひしめいている。": "Your fleet landed on {0}. {1} nations crowd the island.", "{0}に上陸！": "Landed on {0}!", "第{0}日、{1}の{2}か国すべてを従えた。この島の属国からは、海を隔てても朝貢の半分が届く（遠い島からの朝貢 毎秒+{3}金・+{4}食料）。兵・金・施設をそのまま連れて、海の向こうの{5}へ渡ろう。": "On day {0}, all {2} nations of {1} came under your rule. Its vassals keep sending half their tribute across the sea (tribute from far islands: +{3} gold and +{4} food per second). Take your soldiers, gold and buildings across the sea to {5}.", "{0}へ渡る": "Sail to {0}", "{0}との関係が深まった。協定を結べる。": "Relations with {0} have grown. You can sign a pact.", "{0}と交易協定を結んだ。毎秒{1}金が入る。": "Signed a trade pact with {0}. +{1} gold per second.", "{0}{1}人が英雄となった。": "{1} {0} became heroes.", "{0}を建てた。": "Built a {0}.", "{0}を施行（Lv{1}）。": "{0} enacted (Lv{1}).", "<thead><tr><th>兵種</th>{0}<th>計</th></tr></thead><tbody>{1}<tr class=\"tot\"><td>計</td>{2}<td data-all>0</td></tr></tbody>": "<thead><tr><th>Type</th>{0}<th>Total</th></tr></thead><tbody>{1}<tr class=\"tot\"><td>Total</td>{2}<td data-all>0</td></tr></tbody>", "<div class=\"nm\">{0}<span class=\"ds\">{1}・戦力{2}</span></div><div class=\"ct\">0</div>\n  <button class=\"b solid\" data-x=\"t\">訓練<small></small></button>": "<div class=\"nm\">{0}<span class=\"ds\">{1}, power {2}</span></div><div class=\"ct\">0</div>\n  <button class=\"b solid\" data-x=\"t\">Train<small></small></button>", "近衛兵 ×{0}<small></small>": "Guards ×{0}<small></small>", "育成の順番待ちは{0}人まで": "The training queue holds at most {0}", "近衛兵{0}人の育成をやめ、金と食料を戻した。": "Stopped training {0} royal guards and got the gold and food back.", "<div><div class=\"nm\">{0}</div><div class=\"ds\">{1}</div></div><button class=\"b\" type=\"button\"><span>研究する</span><small></small></button>": "<div><div class=\"nm\">{0}</div><div class=\"ds\">{1}</div></div><button class=\"b\" type=\"button\"><span>Research</span><small></small></button>", "研究「{0}」を始めた（{1}秒）。": "Started research \"{0}\" ({1}s).", "傭兵 {0}+10": "Hire {0} +10", "書き出した（{0}文字）。「コピー」で写して、別の端末で貼りつける。": "Exported ({0} characters). Use \"Copy\" and paste it on the other device.", "王朝は第{0}代に引き継がれた。先代の学問は残り、兵はみな少し強くなった。": "The dynasty passed to generation {0}. The knowledge of your forebears remains, and every soldier is a little stronger.", "征服 {0}": "Conquest: {0}", "<article class=\"nation\"><div class=\"n-head\"><div><div class=\"n-size\" data-r=\"size\"></div><h4 data-r=\"name\"></h4></div><span class=\"n-st\" data-r=\"st\"></span></div>\n  <p class=\"n-desc\" data-r=\"desc\"></p>\n  <dl class=\"n-stats\"><div><dt>兵力</dt><dd data-r=\"pw\"></dd></div><div><dt>主力</dt><dd data-r=\"main\"></dd></div><div><dt>勝率</dt><dd data-r=\"ch\"></dd></div><div><dt>関係</dt><dd data-r=\"rl\"></dd></div></dl>\n  <p class=\"note\" data-r=\"eta\"></p>\n  <div class=\"relbar\"><i data-r=\"rb\"></i></div>\n  <div class=\"n-acts\" data-r=\"acts\">\n    <button class=\"b\" data-a=\"food\">食料10を売る<small data-r=\"fp\"></small></button>\n    <button class=\"b\" data-a=\"food100\">食料100を売る<small data-r=\"fp2\"></small></button>\n    <button class=\"b\" data-a=\"pact\"><span data-r=\"pn\"></span><small data-r=\"pc\"></small></button>\n    <button class=\"b\" data-a=\"truce\"><span data-r=\"tn\">和平条約を結ぶ</span><small data-r=\"tc\"></small></button>\n    <div class=\"fracrow\"><label class=\"lbl\" for=\"atkRange\">出陣させる兵</label><input type=\"range\" class=\"vol\" id=\"atkRange\" min=\"1\" max=\"100\" step=\"1\" value=\"100\" data-r=\"frac\"><span class=\"pct\" data-r=\"fracPct\">100%</span><span class=\"note\" data-r=\"avail\"></span></div>\n    <button class=\"b solid\" data-a=\"war\">侵攻する<small data-r=\"wr\"></small></button>\n  </div>\n  <p class=\"n-vassal\" data-r=\"vs\" hidden></p>\n  <div class=\"n-acts\" data-r=\"vacts\" hidden><button class=\"b\" data-a=\"gift\">褒美を与える<small data-r=\"gc\"></small></button><button class=\"b\" data-a=\"leave\">次の島へ渡る<small>島の主を討ったので渡れる</small></button></div></article>": "<article class=\"nation\"><div class=\"n-head\"><div><div class=\"n-size\" data-r=\"size\"></div><h4 data-r=\"name\"></h4></div><span class=\"n-st\" data-r=\"st\"></span></div>\n  <p class=\"n-desc\" data-r=\"desc\"></p>\n  <dl class=\"n-stats\"><div><dt>Power</dt><dd data-r=\"pw\"></dd></div><div><dt>Main</dt><dd data-r=\"main\"></dd></div><div><dt>Win</dt><dd data-r=\"ch\"></dd></div><div><dt>Relations</dt><dd data-r=\"rl\"></dd></div></dl>\n  <p class=\"note\" data-r=\"eta\"></p>\n  <div class=\"relbar\"><i data-r=\"rb\"></i></div>\n  <div class=\"n-acts\" data-r=\"acts\">\n    <button class=\"b\" data-a=\"food\">Sell 10 food<small data-r=\"fp\"></small></button>\n    <button class=\"b\" data-a=\"food100\">Sell 100 food<small data-r=\"fp2\"></small></button>\n    <button class=\"b\" data-a=\"pact\"><span data-r=\"pn\"></span><small data-r=\"pc\"></small></button>\n    <button class=\"b\" data-a=\"truce\"><span data-r=\"tn\">Sign a truce</span><small data-r=\"tc\"></small></button>\n    <div class=\"fracrow\"><label class=\"lbl\" for=\"atkRange\">Soldiers to send</label><input type=\"range\" class=\"vol\" id=\"atkRange\" min=\"1\" max=\"100\" step=\"1\" value=\"100\" data-r=\"frac\"><span class=\"pct\" data-r=\"fracPct\">100%</span><span class=\"note\" data-r=\"avail\"></span></div>\n    <button class=\"b solid\" data-a=\"war\">Invade<small data-r=\"wr\"></small></button>\n  </div>\n  <p class=\"n-vassal\" data-r=\"vs\" hidden></p>\n  <div class=\"n-acts\" data-r=\"vacts\" hidden><button class=\"b\" data-a=\"gift\">Give a reward<small data-r=\"gc\"></small></button><button class=\"b\" data-a=\"leave\">Sail to the next island<small>the island lord is defeated</small></button></div></article>", "{0}と和平条約を結んだ。{1}分間はお互いに攻めない。": "Signed a truce with {0}. Neither side will attack for {1} minutes.", "属国の{0}に褒美を与えた（忠誠 {1}）。": "Rewarded your vassal {0} (loyalty {1}).", "戦場をタップして兵を10人集める（いま {0}人）": "Tap the battlefield to raise 10 soldiers (now {0})", "外交タブで{0}に侵攻する": "Invade {0} from the Diplomacy tab", "{0}{1}を属国にする（兵力 {2}・残り{3}か国）": "Make {0}{1} your vassal (power {2}, {3} nations left)", "第{0}日": "Day {0}", "タップ +{0}": "Tap +{0}", "最大 {0}": "Max {0}", "戦闘中 {0}か所・待機 {1}人": "{0} in battle, {1} idle", "兵種 {0}種": "{0} unit types", "野営地 {0} / {1}": "Camp {0} / {1}", "城壁 {0} / {1}": "Wall {0} / {1}", "{0}{1} 来襲": "{0}{1} attacks", "ほか{0}か国 連合軍": " + {0} allies", "侵攻 → {0}": "Invading → {0}", "味方 {0}人 ／ 敵 {1}人・タップで援軍": "Us {0} / them {1}. Tap to reinforce", "{0}・あと{1}秒": "{0}, {1}s left", "タップで徴兵：{0}": "Tap to recruit: {0}", "できる {0}": "{0} ready", "あと{0}秒": "{0}s left", "{0}人": "{0}", " +{0}/秒": " +{0}/s", "食料 +{0}": "Food +{0}", "研究中：{0}（あと{1}秒）": "Researching: {0} ({1}s left)", "先に{0}": "Needs {0}", "{0}金・{1}秒": "{0} gold, {1}s", "総兵 {0}・戦力 {1}": "{0} soldiers, power {1}", "負傷兵 {0}人（少しずつ部隊に戻る）": "{0} wounded (they return to duty gradually)", "近衛兵 {0}人。一人の戦力{1}・打たれ強さは槍兵の約2倍で、騎兵に強い。防衛戦では「防衛に出す兵」の割合に関係なく全員が城を守る。侵攻には出ない。": "{0} royal guards. Each has power {1}, about twice a spearman's toughness, and is strong against cavalry. In a defense all of them fight regardless of the \"Soldiers to defend\" share. They never join invasions.", "{0}金・{1}食・{2}": "{0} gold, {1} food, {2}", "育成中 {0}人（全員そろうまで {1}）": "Training {0} ({1} until all are ready)", "{0}金+{1}食": "{0} gold + {1} food", "この島の特色：{0} — {1}": "This island: {0} — {1}", "{0}　性格：{1}（{2}）": "{0} Temper: {1} ({2})", "試算 {0}回・勝つときは約{1}分で決着": "{0} simulations; a win takes about {1} min", "試算 {0}回・この兵では勝てない見込み": "{0} simulations; this army is unlikely to win", "{0}に併合された。{1}を従えれば、この国も属国になる。": "Annexed by {0}. Make {1} your vassal and this nation comes with it.", "朝貢 毎秒 +{0}金・+{1}食料・忠誠 {2}{3}": "Tribute +{0} gold and +{1} food per second, loyalty {2}{3}", "{0}金・忠誠+20": "{0} gold, loyalty +20", "+{0}金": "+{0} gold", "+{0}/秒": "+{0}/s", "出陣できる兵 {0}人 → {1}人を送る（同時の侵攻 {2}/{3}）": "{0} soldiers available → sending {1} (invasions {2}/{3})", "{0}金・{1}分": "{0} gold, {1} min", "相手は{0}主体": "Mostly {0}", "実績「{0}」を達成した。": "Achievement unlocked: \"{0}\".", "実績：{0}": "Achievement: {0}", "第{0}代": "Generation {0}", "<li class=\"{0}\"><span class=\"d\">第{1}日</span><span class=\"t\"></span></li>": "<li class=\"{0}\"><span class=\"d\">Day {1}</span><span class=\"t\"></span></li>", "島の主を討ち、{0}をあとにした。": "With the island lord defeated, you left {0} behind.", "属国の{0}が反乱を起こし、独立した。": "Your vassal {0} rebelled and broke free.", "{0}が反乱！": "{0} rebels!", "{0}が{1}に攻め込み、併合した。国境が動いた。": "{0} invaded and annexed {1}. The borders have shifted.", "{0}が{1}に攻め込んだが、退けられた。": "{0} invaded {1} but was driven back.", "{0}の使者が来た。「わが国と協定を結びませんか。費用はいりません」": "An envoy from {0} arrives: \"Will you sign a pact with us? It will cost you nothing.\"", "{0}の申し込みを受け、協定を結んだ。": "Accepted {0}'s offer and signed a pact.", "{0}が食料{1}を金{2}で買いたいと言っている（いつもより高い）。": "{0} wants to buy {1} food for {2} gold (more than usual).", "{0}に食料{1}を売り、金{2}を得た。": "Sold {1} food to {0} for {2} gold.", "{0}の{1}が隣国に脅かされ、軍資金{2}金の援助を求めている。": "Your {0} {1} is threatened by a neighbor and asks for {2} gold in war funds.", "{0}金を送る": "Send {0} gold", "{0}に軍資金を送った。": "Sent war funds to {0}.", "{0}の援軍の要請を断った。": "Turned down {0}'s call for aid.", "{0}が和平条約を提案してきた。{1}分間、お互いに攻めないという約束だ。": "{0} proposes a truce: neither side attacks for {1} minutes.", "{0}と和平条約を結んだ。": "Signed a truce with {0}.", "戦場をタップすると、門から兵が1人出てくる。まず10人集めよう（いま {0}人）。": "Tap the battlefield and a soldier comes out of the gate. Raise 10 to start (now {0}).", "チュートリアル {0} / {1}": "Tutorial {0} / {1}", "研究「{0}」が終わった。{1}。": "Research \"{0}\" finished. {1}.", "研究完了：{0}": "Research done: {0}", "保留の期限が切れ、{0}が攻めてきた。": "The delay ran out and {0} attacked."},EN_H={"棒の盟主": "Stick Sovereign", "第1日": "Day 1", "？ 遊び方": "? How to play", "国の資源": "Realm resources", "持っている兵の合計。戦場をタップするか兵舎で増える。下は兵舎で増える速さ。": "Total soldiers you have. Tap the battlefield or build barracks to get more. Below: barracks output.", "兵士": "Soldiers", "兵を作るときに使う。農場と「耕す」、属国の朝貢で増える。下は1秒あたりの増減（兵舎で使う分を引いた数）。": "Spent when making soldiers. Comes from farms, \"Till\" and vassal tribute. Below: change per second (after barracks use).", "食料": "Food", "施設・研究・訓練・傭兵・和平に使う。市場、協定、属国の朝貢、賠償金、交易で増える。": "Spent on buildings, research, training, mercenaries and peace. Comes from markets, pacts, tribute, reparations and trade.", "金": "Gold", "防衛戦で敵に削られる耐久。0になると金と食料を奪われる。城壁強化と研究で上がり、戦いのない間に回復する。": "Durability the enemy wears down in a defense. At 0 they take your gold and food. Raised by wall upgrades and research; recovers between battles.", "城壁": "Wall", "兵の強さの合計（兵種の戦力×階級の倍率×研究）。敵の「兵力」と比べる目安。": "Total army strength (unit power × rank multiplier × research). Compare it with an enemy's \"power\".", "戦力": "Power", "タップで作る兵種": "Unit type made by tapping", "タップで選んだ兵種を徴兵": "Tap to recruit the selected unit type", "敵の野営地": "Enemy camp", "撤退する": "Retreat", "宣戦中": "At war:", "迎え撃つ": "Fight", "タップで徴兵": "Tap to recruit", "上のボタンで兵種を選べる": "Pick the unit type with the buttons above", "全画面": "Full screen", "戦いが始まると、ここで速さと指示を選べる": "Speed and orders appear here once a battle starts", "速さ": "Speed", "指示": "Orders", "弓は後ろから": "Archers stay back", "盟主が出陣": "Sovereign rides out", "内政": "Realm", "軍団": "Army", "外交": "Diplomacy", "記録": "Records", "耕す": "Till", "食料 +20": "Food +20", "施設": "Buildings", "自動で生産": "Produce automatically", "兵舎": "Barracks", "兵種ごとに自動で徴兵": "Recruit each type automatically", "改良": "Upgrades", "国力の底上げ": "Strengthen the realm", "研究": "Research", "金と時間で進める": "Costs gold and time", "傭兵": "Mercenaries", "金で兵卒を雇う（食料はいらない）": "Hire privates for gold (no food needed)", "兵の内訳": "Army breakdown", "近衛兵": "Royal guards", "防衛戦だけで戦う精鋭": "Elite troops that fight only in defense", "近衛兵を育てる（一人 金40・食料20・3秒。タップや兵舎では増えない）": "Train royal guards (40 gold, 20 food and 3 s each; tapping and barracks don't make them)", "やめる": "Cancel", "払った分を返す": "refund the rest", "訓練": "Training", "階級ごとに操作": "By rank", "操作する階級": "Rank to train", "一度に動かす人数": "How many at once", "戦闘中も訓練できる。兵は戦場の上の兵種ボタンで選んでからタップすると、その兵種で生まれる。「訓練」は金と食料を使って一つ上の階級へ上げる。階級が上がるほど一人あたりの戦力が上がる。": "You can train during battles. Pick a unit type above the battlefield and tap to recruit that type. \"Train\" spends gold and food to raise soldiers one rank; higher ranks are stronger.", "征服": "Conquest", "属国の朝貢": "Vassal tribute", "重いほど金と食料が多く入るが、属国の忠誠が下がり、反乱しやすくなる。": "Heavier tribute brings more gold and food, but loyalty drops and vassals rebel more easily.", "世界地図。国を押して選ぶ。ドラッグで移動、拡大ボタンかホイールで拡大": "World map. Tap a nation to select it. Drag to move; zoom with the buttons or the mouse wheel", "拡大": "Zoom in", "＋": "+", "縮小": "Zoom out", "全体": "All", "地図を描いています…": "Drawing the map…", "自国": "Home", "独立国": "Independent", "協定国": "Pact", "属国": "Vassal", "次の目標": "Next goal", "実績": "Achievements", "統計": "Statistics", "設定": "Settings", "難しさ": "Difficulty", "効果音": "Sound effects", "音楽": "Music", "音": "Sound", "音を消す": "Mute", "裏の戦い": "Background battles", "映していない戦いは×4で進める": "Run battles not on screen at ×4", "セーブ": "Save", "別の端末やブラウザへ持っていく": "Move to another device or browser", "セーブの文字列": "Save text", "書き出す": "Export", "コピー": "Copy", "読み込む": "Import", "「書き出す」で今のセーブが文字列になる。別の端末で貼りつけて「読み込む」と続きから遊べる。": "\"Export\" turns your save into text. Paste it on another device and press \"Import\" to continue there.", "王朝": "Dynasty", "島を2つ以上統一すると、王朝を次の代へ引き継げる。研究と実績はそのまま、ほかは最初の島からやり直し。代を重ねるごとに全兵の戦力 +10%。": "After unifying two or more islands you can pass the dynasty on. Research and achievements stay; everything else restarts from the first island. Each generation gives all soldiers +10% power.", "王朝を次の代へ": "Next generation", "年代記": "Chronicle", "最初からやり直す": "Start over", "宣戦布告": "Declaration of war", "敵兵力": "Enemy power", "主力": "Main force", "守る兵の戦力": "Defenders' power", "防衛に出す兵": "Soldiers to defend", "いま迎え撃つ": "Fight now", "城壁の前で防衛戦": "Defend in front of the wall", "開戦を保留する": "Delay the war", "和平金を払って退かせる": "Pay them to withdraw", "遊び方": "How to play", "目的": "Goal", "島の国々をすべて属国にすると島を統一でき、兵・金・施設を連れて次の島へ渡れる。属国の朝貢は島を離れても入り続ける。": "Make every nation on the island your vassal to unify it, then sail to the next island with your soldiers, gold and buildings. Vassal tribute keeps coming after you leave.", "戦場をタップすると門から新兵が一人出てくる。兵は作るときだけ食料を使い、その後は食料を減らさない。": "Tap the battlefield and a recruit comes out of the gate. Soldiers cost food only when made, not afterwards.", "兵種": "Unit types", "戦場の上で兵種を選んでタップすると、その兵が生まれる。歩兵は無料、ほかは一人ごとに食料を使う。槍兵は騎兵に、騎兵は弓兵に、弓兵は歩兵と槍兵に強い。盾兵は打たれ強い。": "Pick a unit type above the battlefield and tap to make that soldier. Infantry are free; other types cost food each. Spearmen beat cavalry, cavalry beat archers, archers beat infantry and spearmen. Shieldmen are tough.", "城壁と野営地": "Walls and camps", "戦場の左上に味方の拠点、右上に敵の拠点の耐久が出る。敵の拠点の耐久を0にすれば、敵兵が残っていてもその場で勝ち。味方の拠点を0にされると負け（防衛戦なら金と食料を奪われる）。攻めてくる前に宣戦布告があり、開戦を保留したり和平金で退かせたりできる。": "Your base's durability shows top left and the enemy's top right. Bring the enemy base to 0 and you win on the spot, even if enemy soldiers remain. If your base reaches 0 you lose (in a defense they take gold and food). Attackers declare war first, so you can delay the war or pay them to withdraw.", "地図で国を選び、交易・協定・侵攻を行う。勝てば属国となり、朝貢（金と食料）が入る。": "Pick nations on the map to trade, sign pacts or invade. Beaten nations become vassals and send tribute (gold and food).", "キーボード（パソコン）": "Keyboard (computer)", "スペース": "Space", "戦場にカーソルがあるとき徴兵": "Recruit while the battlefield is focused", "1〜5": "1–5", "徴兵する兵種を選ぶ（歩・槍・盾・弓・騎）": "Choose the unit type (infantry, spear, shield, archer, cavalry)", "この画面を閉じる": "Close this window", "チュートリアルを最初から見る": "Replay the tutorial", "閉じる": "Close", "スキップ": "Skip", "次へ": "Next", "使者": "Envoy", "受ける": "Accept", "断る": "Decline", "島を統一": "Island unified", "新しい島へ渡る": "Sail to a new island"};
// 日本語ではそのまま、英語では辞書の訳を返す
const __L=s=>LANG==='en'&&EN_L[s]!==undefined?EN_L[s]:s;
const __LT=(k,a)=>(LANG==='en'&&EN_T[k]!==undefined?EN_T[k]:k).replace(/\{(\d+)\}/g,(m,i)=>a[i]);
// 画面にもとから書いてある文字を訳す
if(LANG==='en'){
  document.documentElement.lang='en';
  const tr=t=>{const k=t.trim();return EN_H[k]!==undefined?t.replace(k,EN_H[k]):t;};
  const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentElement;return p&&!/^(SCRIPT|STYLE)$/.test(p.tagName)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
  const ns=[];while(w.nextNode())ns.push(w.currentNode);ns.forEach(n=>{if(/\S/.test(n.nodeValue))n.nodeValue=tr(n.nodeValue).replace(/\u3000/g,' ');});
  document.querySelectorAll('[data-tip],[aria-label],[title],[placeholder]').forEach(el=>{for(const a of ['data-tip','aria-label','title','placeholder']){const v=el.getAttribute(a);if(v)el.setAttribute(a,tr(v));}});
  const sb=document.querySelector('.brand .sub');if(sb)sb.textContent='棒の盟主';
  document.title='Stick Sovereign';
}
// 言語を選ぶ：はじめて開いたときと、記録タブの設定から
function setLang(v,fromStart){
  try{localStorage.setItem(LANG_KEY,v);}catch(e){}
  if(v===LANG){document.getElementById('langModal').hidden=true;langBtns();return;}
  // 始めたばかりなら、その言語で最初から始める。続きのときはセーブを残して画面を読み込み直す
  try{if(fromStart&&S&&S.t<120&&!(S.stats&&(S.stats.atkWins||S.stats.defWins)))localStorage.removeItem(SAVE_KEY);else save();}catch(e){}
  NOSAVE=true;location.reload();
}
function langBtns(){document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===LANG)));}
document.querySelectorAll('#langModal [data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang,true)));
document.querySelectorAll('#langSeg [data-lang]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang,false)));
langBtns();
if(!LANG_SET)document.getElementById('langModal').hidden=false;
const SAVE_KEY='bou-no-meishu-v3';
const $=s=>document.querySelector(s);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const fmt=n=>{n=Math.floor(n);const a=Math.abs(n);if(a>=1e9)return(n/1e9).toFixed(2)+'B';if(a>=1e6)return(n/1e6).toFixed(2)+'M';if(a>=1e4)return(n/1e3).toFixed(1)+'k';return String(n)};
const fmtR=r=>(r>=0?'+':'−')+(Math.abs(r)<10?Math.abs(r).toFixed(1):fmt(Math.abs(r)))+__L("/秒");
function rngOf(s){return()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;}}

/* ---------- データ ---------- */
const TYPES=[
 {id:'inf',name:__L("歩兵"),cost:0,base:1,hp:1,spd:0.07,rng:0.035,note:__L("武器なし")},
 {id:'spear',name:__L("槍兵"),cost:4,base:3,hp:1,spd:0.07,rng:0.045,note:__L("騎兵に強い")},
 {id:'shield',name:__L("盾兵"),cost:4,base:2.5,hp:1.9,spd:0.05,rng:0.035,note:__L("打たれ強く弓に強い")},
 {id:'bow',name:__L("弓兵"),cost:5,base:3,hp:0.7,spd:0.06,rng:0.24,note:__L("遠くから撃つ")},
 {id:'cav',name:__L("騎兵"),cost:12,base:5,hp:1.3,spd:0.15,rng:0.045,note:__L("速い・弓兵に強い")},
];
// ADV[自分][相手] 相性
const ADV=[[1,1,1,1,1],[1,1,1,1,2],[1,1,1,1.6,1],[1.5,1.5,0.5,1,0.6],[1.3,0.5,0.8,2,1]];
// 近衛兵：防衛戦だけで戦う精鋭（槍兵の型で戦う）
const GUARD_POW=6,GUARD_HP=1.8,GUARD_G=40,GUARD_F=20,GUARD_SEC=3,GUARD_AMT=[1,10,50],GUARD_QMAX=500;// 一人あたり 金40・食料20・3秒で育つ
const fmtSec=t=>{t=Math.ceil(t);return t<60?__LT("{0}秒",[t]):t<3600?__LT("{0}分{1}",[Math.floor(t/60),t%60?(t%60)+__L("秒"):'']):__LT("{0}時間{1}分",[Math.floor(t/3600),Math.floor(t%3600/60)]);};
const guardPow=()=>GUARD_POW*(1+0.1*(S.gen||0));
const RANKS=[{name:__L("新兵"),m:1},{name:__L("兵卒"),m:1.3},{name:__L("精兵"),m:1.7},{name:__L("古参"),m:2.2},{name:__L("英雄"),m:3}];
const TRAIN_G=[6,18,45,110];
const NAT_DEF=[
 [__L("ポポ村"),__L("小村"),__L("牧歌的な村。兵は鍬を持って戦う。")],[__L("ルクの里"),__L("小国"),__L("山あいの里。")],[__L("ネムリ公国"),__L("小国"),__L("眠そうな公爵が治める。")],
 [__L("ミルの町"),__L("小国"),__L("粉ひき小屋の並ぶ町。")],[__L("トト自治区"),__L("小国"),__L("頑固な長老たちの自治区。")],[__L("カルナ王国"),__L("中小国"),__L("川沿いの王国。商人が多い。")],
 [__L("ソラ藩国"),__L("中小国"),__L("高原の藩国。風が強い。")],[__L("灰の連合"),__L("中小国"),__L("火山灰の地の部族連合。")],[__L("イズミ共和国"),__L("中小国"),__L("泉の湧く共和国。")],
 [__L("ベルガ辺境伯領"),__L("中国"),__L("国境を守ってきた古い家。")],[__L("ヴェルト帝国"),__L("中国"),__L("野心ある若い帝国。")],[__L("北海同盟"),__L("中国"),__L("港町の同盟。冬が長い。")],
 [__L("翠の森林国"),__L("中国"),__L("深い森に隠れた国。")],[__L("オルド騎馬国"),__L("中国"),__L("草原を駆ける騎馬の民。")],[__L("塩の都市連合"),__L("中国"),__L("塩の交易で栄える都市群。")],
 [__L("砂漠の大国ザハル"),__L("大国"),__L("砂の海を渡る大国。")],[__L("鉄の帝国グラン"),__L("大国"),__L("鉄の鉱山を握る軍事国家。")],[__L("霧の王朝"),__L("大国"),__L("霧の谷に千年続く王朝。")],
 [__L("双頭鷲帝国"),__L("大国"),__L("二人の皇帝が並び立つ。")],[__L("黒曜の神聖国"),__L("大国"),__L("黒い神殿を戴く神権国家。")],[__L("雪原連邦"),__L("覇権国"),__L("雪原の諸邦をまとめた連邦。")],
 [__L("大海洋王国"),__L("覇権国"),__L("海を制した王国。")],[__L("東方大帝国"),__L("覇権国"),__L("東の果ての大帝国。")],[__L("白銀大帝国"),__L("覇権国"),__L("大陸の半分を従える最大の国。")],
];
// 最初の島に足す12か国（強さは既存の国のあいだに入る）
const NAT_EXTRA=[
 [__L("コロの浜"),__L("小村"),__L("漁師たちの浜の集落。")],[__L("ヤナ郷"),__L("小村"),__L("簗で魚をとる川辺の郷。")],[__L("フクロウ谷"),__L("小国"),__L("夜に働く職人の谷。")],
 [__L("石橋の町"),__L("小国"),__L("古い石橋で栄えた町。")],[__L("ラタン王国"),__L("中小国"),__L("籐細工を売る小さな王国。")],[__L("赤土の部族"),__L("中小国"),__L("赤い大地に住む部族。")],
 [__L("湖上都市リム"),__L("中国"),__L("湖に浮かぶ都市国家。")],[__L("羊飼い連邦"),__L("中国"),__L("高原の牧羊の民の連邦。")],[__L("銅鐸公国"),__L("中国"),__L("銅の鐘を鋳る公国。")],
 [__L("月影の王国"),__L("大国"),__L("夜祭りで名高い王国。")],[__L("琥珀帝国"),__L("大国"),__L("琥珀の交易を握る帝国。")],[__L("天空の聖王国"),__L("覇権国"),__L("山上に都を構える聖王国。")],
];
const ISLAND_NAMES=[__L("始まりの大陸"),__L("霧の群島"),__L("黒岩島"),__L("南の大島"),__L("氷の大陸"),__L("炎の諸島"),__L("翡翠の大陸"),__L("嵐の大島")];
const islandName=n=>ISLAND_NAMES[n]||__LT("第{0}の大陸",[n+1]);
function mkMix(R,main,weak){const mix=[0,0,0,0,0].map(()=>R()*0.4);mix[main]+=1.2;if(weak){mix[3]=0.02;mix[4]=0.02;}const sm=mix.reduce((a,b)=>a+b,0);return mix.map(v=>v/sm);}
let makeNations=function(n){
  if(n===0){
    const R=rngOf(4242);
    const base=NAT_DEF.map((d,k)=>{let main=Math.floor(R()*5);if(k===12)main=3;if(k===13||k===15)main=4;if(k===16)main=2;if(k<3)main=0;
      const mix=mkMix(R,main,k<3);return {name:d[0],size:d[1],desc:d[2],power:Math.round(5*Math.pow(1.42,k)),foodP:+(1+R()*2).toFixed(2),mix,main};});
    const R2=rngOf(4343);
    const extra=NAT_EXTRA.map((d,j)=>{const main=j<2?0:Math.floor(R2()*5);return {name:d[0],size:d[1],desc:d[2],power:Math.round(5*Math.pow(1.42,0.5+2*j)),foodP:+(1+R2()*2).toFixed(2),mix:mkMix(R2,main,j<2),main};});
    return base.concat(extra);
  }
  // 2つめ以降の島：名前・強さを自動で作る
  const R=rngOf(9000+n*131),N=Math.min(48,36+6*n);
  const A=[__L("アル"),__L("ベル"),__L("カ"),__L("ドラ"),__L("エル"),__L("フィ"),__L("ガル"),__L("ハル"),__L("イル"),__L("ジャ"),__L("ク"),__L("ラ"),__L("マル"),__L("ノ"),__L("オル"),__L("パ"),__L("リ"),__L("サ"),__L("タ"),__L("ウル"),__L("ヴァ"),__L("ゼ"),__L("ミ"),__L("ロ"),__L("シ"),__L("ネ"),__L("ト"),__L("ユ")];
  const Bs=[__L("ン"),__L("ス"),__L("ド"),__L("ナ"),__L("ラ"),__L("ム"),__L("ト"),__L("リア"),__L("ノ"),__L("ガ"),__L("ザ"),__L("レ"),__L("キア"),__L("ディア"),__L("ロン"),__L("ヴェ")];
  const SUF=[[__L("村"),__L("の里"),__L("郷"),__L("自治区")],[__L("公国"),__L("王国"),__L("共和国"),__L("辺境伯領"),__L("連合")],[__L("帝国"),__L("大王国"),__L("神聖国"),__L("連邦")],[__L("大帝国"),__L("覇王国"),__L("大連邦")]];
  const SIZE=[__L("小国"),__L("中国"),__L("大国"),__L("覇権国")];
  const DESC=[__L("入り江に港を構える国。"),__L("霧に包まれた丘の国。"),__L("鉱山で栄える山の国。"),__L("広い麦畑を持つ平野の国。"),__L("騎馬の民が治める草原の国。"),__L("古い神殿の残る森の国。"),__L("塩田の広がる海辺の国。"),__L("高い城壁で守られた城塞都市。"),__L("川をはさんで争ってきた国。"),__L("北の風が吹きつける寒い国。")];
  const pMin=480*Math.pow(4,n-1),pMax=16000*Math.pow(4,n),used=new Set(),out=[];
  for(let k=0;k<N;k++){
    const f=k/(N-1),tier=f<0.3?0:f<0.65?1:f<0.9?2:3;let nm;
    do{const a=A[Math.floor(R()*A.length)],bb=Bs[Math.floor(R()*Bs.length)],sf=SUF[tier][Math.floor(R()*SUF[tier].length)];nm=LANG==='en'?(a+bb).charAt(0).toUpperCase()+(a+bb).slice(1).toLowerCase()+' '+sf:a+bb+sf;}while(used.has(nm));used.add(nm);
    const main=Math.floor(R()*5);
    out.push({name:nm,size:SIZE[tier],desc:DESC[Math.floor(R()*DESC.length)],power:Math.round(pMin*Math.pow(pMax/pMin,f)),foodP:+(1+R()*2+n*0.5).toFixed(2),mix:mkMix(R,main,false),main});
  }
  return out;
};
function decorate(list,n){
  const R=rngOf(777+n*53);list.forEach((d,k)=>{d.per=k<2?3:Math.floor(R()*4);});
  // いちばん強い国が「島の主」
  const top=list.reduce((a,d,k)=>d.power>list[a].power?k:a,0);list[top].boss=true;list[top].power=Math.round(list[top].power*1.5);list[top].size=__L("島の主");
  return list;}
const _mk=makeNations;makeNations=n=>decorate(_mk(n),n);
let NATIONS=makeNations(0);
let NN=NATIONS.length;
const wealth=i=>NATIONS[i].power*10;
const BUILD=[
 {id:'farm',name:__L("農場"),desc:__L("食料 +12/秒"),base:25,mult:1.15},
 {id:'market',name:__L("市場"),desc:__L("金 +0.5/秒"),base:80,mult:1.18},
 {id:'wall',name:__L("城壁強化"),desc:__L("城壁の耐久 +200、矢倉の威力 +2"),base:90,mult:1.3},
];
// 兵種ごとの兵舎（自動生産）。生むたびにその兵種の食料を使う（歩兵は1）
const CAMP=[
 {id:'barracks',t:0,name:__L("歩兵舎"),rate:0.25,base:100,mult:1.2},
 {id:'c_spear',t:1,name:__L("槍兵舎"),rate:0.12,base:150,mult:1.22},
 {id:'c_shield',t:2,name:__L("盾兵舎"),rate:0.12,base:150,mult:1.22},
 {id:'c_bow',t:3,name:__L("弓兵舎"),rate:0.1,base:180,mult:1.22},
 {id:'c_cav',t:4,name:__L("厩舎"),rate:0.05,base:260,mult:1.25},
];
const campFood=c=>Math.max(1,TYPES[c.t].cost);
CAMP.forEach(c=>c.desc=__LT("{0} +{1}/秒（一人 食料{2}）",[TYPES[c.t].name,c.rate,campFood(c)]));
const UPG=[
 {id:'tap',name:__L("徴兵令"),desc:__L("一回のタップで生まれる兵 +1"),base:40,mult:2.3,max:12},
 {id:'hoe',name:__L("鉄の鍬"),desc:__L("「耕す」の食料 ×2"),base:30,mult:2.6,max:8},
 {id:'drill',name:__L("練兵場"),desc:__L("訓練の費用 −15%"),base:150,mult:2.5,max:4},
];

// 研究（金と時間で進める。pre は先に必要な研究）
const RESEARCH=[
 {id:'inf1',name:__L("隊列訓練"),desc:__L("歩兵の戦力 +20%"),cost:400,time:60},
 {id:'spear1',name:__L("鉄の槍"),desc:__L("槍兵の戦力 +15%"),cost:600,time:80},
 {id:'shield1',name:__L("大盾"),desc:__L("盾兵の耐久 +25%"),cost:600,time:80},
 {id:'bow1',name:__L("長弓"),desc:__L("弓兵の射程 +20%"),cost:800,time:90},
 {id:'cav1',name:__L("軍馬の育成"),desc:__L("騎兵の速さ +20%・突撃の一撃 ×1.5"),cost:1000,time:100},
 {id:'farm1',name:__L("輪作"),desc:__L("農場の食料 +50%"),cost:500,time:60},
 {id:'trade1',name:__L("商人ギルド"),desc:__L("交易の値段 +30%・市場の金 ×2"),cost:900,time:90},
 {id:'wall1',name:__L("石造りの城壁"),desc:__L("城壁の耐久 +50%"),cost:1200,time:120,pre:'inf1'},
 {id:'tower1',name:__L("強弓の矢倉"),desc:__L("矢倉の威力 ×2"),cost:1500,time:120,pre:'bow1'},
 {id:'med1',name:__L("軍医"),desc:__L("負傷兵になる割合 20%→35%・復帰が速い"),cost:1500,time:120,pre:'shield1'},
 {id:'drill2',name:__L("将校学校"),desc:__L("訓練の費用 −25%"),cost:2500,time:150,pre:'spear1'},
 {id:'merc1',name:__L("傭兵団との契約"),desc:__L("傭兵の値段 −30%"),cost:2000,time:150,pre:'trade1'},
 {id:'spy1',name:__L("斥候"),desc:__L("勝率の試算が正確に（試算の回数が増える）・宣戦の保留 +1回"),cost:1800,time:120},
 {id:'king1',name:__L("近衛隊"),desc:__L("盟主の強さ ×2"),cost:3000,time:180,pre:'cav1'},
];
// 島ごとの特色（両軍にかかる）
const TRAITS=[
 {name:__L("穏やかな大陸"),desc:__L("特別な決まりはない"),wx:null},
 {name:__L("霧の群島"),desc:__L("霧で弓の射程 −30%"),rng:0.7,wx:'fog'},
 {name:__L("黒岩島"),desc:__L("岩場で騎兵の速さ −35%"),cav:0.65,wx:null},
 {name:__L("南の大島"),desc:__L("雨で全員の速さ −15%・盾兵の耐久 +20%"),spd:0.85,shield:1.2,wx:'rain'},
 {name:__L("氷の大陸"),desc:__L("雪で全員の速さ −20%・騎兵はさらに −20%"),spd:0.8,cav:0.8,wx:'snow'},
 {name:__L("炎の諸島"),desc:__L("乾いた風で拠点が燃えやすい（拠点への攻撃 +30%）"),siege:1.3,wx:null},
 {name:__L("翡翠の大陸"),desc:__L("深い森で弓の射程 −20%・歩兵の戦力 +20%"),rng:0.8,inf:1.2,wx:'fog'},
 {name:__L("嵐の大島"),desc:__L("嵐で全員の速さ −15%・弓の射程 −15%"),spd:0.85,rng:0.85,wx:'rain'},
];
const trait=()=>TRAITS[(S&&S.island||0)%TRAITS.length];
const PERS=[{id:'war',name:__L("好戦的"),desc:__L("よく宣戦してくる")},{id:'trade',name:__L("商人"),desc:__L("食料を高く買い、協定が安い")},{id:'shy',name:__L("臆病"),desc:__L("めったに攻めてこない")},{id:'calm',name:__L("穏健"),desc:__L("ふつう")}];
const DIFF=[{name:__L("やさしい"),raid:1.5,coal:0.5,epow:0.8},{name:__L("ふつう"),raid:1,coal:1,epow:1},{name:__L("むずかしい"),raid:0.75,coal:1.5,epow:1.2}];
// 実績
const ACH=[
 {id:'first',name:__L("はじめての勝利"),desc:__L("侵攻で1回勝つ"),ok:()=>S.stats.atkWins>=1},
 {id:'def1',name:__L("城を守る者"),desc:__L("防衛戦で1回勝つ"),ok:()=>S.stats.defWins>=1},
 {id:'coal',name:__L("連合を退けて"),desc:__L("連合軍の防衛戦に勝つ"),ok:()=>S.stats.coalWins>=1},
 {id:'k1000',name:__L("千人斬り"),desc:__L("敵兵を合計1,000人倒す"),ok:()=>S.stats.kills>=1000},
 {id:'k10000',name:__L("万夫不当"),desc:__L("敵兵を合計10,000人倒す"),ok:()=>S.stats.kills>=10000},
 {id:'big',name:__L("大軍の勝利"),desc:__L("1,000人以上の敵がいる戦いに勝つ"),ok:()=>S.stats.maxWin>=1000},
 {id:'multi',name:__L("三方面作戦"),desc:__L("3か国へ同時に侵攻する"),ok:()=>S.stats.maxAtk>=3},
 {id:'hero',name:__L("英雄の軍"),desc:__L("英雄を100人そろえる"),ok:()=>S.army.reduce((a,r)=>a+r[4],0)>=100},
 {id:'res5',name:__L("学問の国"),desc:__L("研究を5つ終える"),ok:()=>Object.keys(S.res||{}).length>=5},
 {id:'isle1',name:__L("海を越えて"),desc:__L("島を1つ統一する"),ok:()=>(S.island||0)>=1||S.stats.isles>=1},
 {id:'boss',name:__L("島の主を討つ"),desc:__L("島の主を属国にする"),ok:()=>S.stats.boss>=1},
 {id:'king',name:__L("盟主自ら"),desc:__L("盟主が出陣した戦いに勝つ"),ok:()=>S.stats.kingWins>=1},
 {id:'gen2',name:__L("王朝の継承"),desc:__L("王朝を次の代へ引き継ぐ"),ok:()=>(S.gen||0)>=1},
];
const STATS0={kills:0,lost:0,atkWins:0,atkLoss:0,defWins:0,defLoss:0,coalWins:0,maxWin:0,maxAtk:0,isles:0,boss:0,kingWins:0,merc:0,rebels:0,absorbed:0};

/* ---------- 状態 ---------- */
function newState(){
  const s={t:0,gold:30,food:150,army:TYPES.map(()=>[0,0,0,0,0]),
    b:{farm:0,market:0,wall:0,barracks:0,c_spear:0,c_shield:0,c_bow:0,c_cav:0},u:{tap:0,hoe:0,drill:0},hp:300,
    nat:NATIONS.map(n=>({power:n.power,rel:Math.round(Math.random()*20-10),st:'free',pact:false,sat:0,loy:60,truce:0})),
    log:[],nextRaid:240,war:null,island:0,tribute:0,tributeF:0,starving:false,ended:false,taps:0,wins:0,
    ver:26,tut:0,guard:0,gq:0,gt:0,opt:{spd:1,autoBg:true,order:[2,1,0,4,3],mix:'alt',diff:1,sfx:0.6,bgm:0.35,mute:false,tax:1},res:{},resq:null,wound:TYPES.map(()=>[0,0,0,0,0]),stats:Object.assign({},STATS0),ach:{},gen:0,nextEv:150,kingAt:0};
  s.army[0][0]=1;return s;
}
let S=null;
try{const raw=localStorage.getItem(SAVE_KEY);if(raw)S=JSON.parse(raw);}catch(e){S=null}
if(S&&S.nat&&S.army){
  S.island=S.island||0;S.tribute=S.tribute||0;if(S.tributeF==null)S.tributeF=S.tribute*2;
  if(S.island>0){NATIONS=makeNations(S.island);NN=NATIONS.length;}
  // 最初の島が24か国だった頃のセーブ：増えた12か国を足す
  if(S.island===0&&S.nat.length===24){for(let i=24;i<NN;i++)S.nat.push({power:NATIONS[i].power,rel:Math.round(Math.random()*20-10),st:'free',pact:false,sat:0});
    S.log=S.log||[];S.log.unshift({d:Math.floor(S.t/10)+1,text:__LT("大陸の奥に新たな国々が見つかった。{0}は{1}か国になった。",[islandName(0),NN]),k:'big'});}
}
if(!S||!S.nat||S.nat.length!==NN||!S.army)S=newState();
if(S.w||S.b.smithy||S.b.bowyer||S.b.ranch){
  const old=[['smithy',60,1.17],['bowyer',70,1.17],['ranch',120,1.2]];let refund=0,conv=0;
  for(const [id,base,m] of old){for(let k=0;k<(S.b[id]||0);k++)refund+=Math.ceil(base*Math.pow(m,k));delete S.b[id];}
  if(S.w){for(let wi=0;wi<4;wi++){const n=Math.floor(S.w[wi]);if(n>0){S.army[wi+1][0]+=n;conv+=n;}}delete S.w;}
  S.gold+=refund;
  S.log=S.log||[];S.log.unshift({d:Math.floor(S.t/10)+1,text:__LT("武器の生産をやめ、兵種ごとに徴兵する制度に改めた。武器工房の建設費{0}金を返し、倉庫の武器{1}個は新兵として配った。",[refund,conv]),k:'big'});
}
CAMP.forEach(c=>{if(S.b[c.id]==null)S.b[c.id]=0;});
// v24 で増えた項目を古いセーブに足す
{const d=newState();for(const k of ['opt','res','resq','wound','stats','ach','gen','nextEv','kingAt','ver'])if(S[k]==null)S[k]=d[k];
  for(const k in d.opt)if(S.opt[k]==null)S.opt[k]=d.opt[k];for(const k in STATS0)if(S.stats[k]==null)S.stats[k]=0;
  S.nat.forEach(n=>{if(n.loy==null)n.loy=60;if(n.truce==null)n.truce=0;});
  if(S.tut==null)S.tut=S.t>90?-1:0;
  if(S.guard==null)S.guard=0;if(S.gq==null)S.gq=0;if(S.gt==null)S.gt=0;
  if(S.b.c_guard){let r=0;for(let k=0;k<S.b.c_guard;k++)r+=Math.ceil(300*Math.pow(1.25,k));S.gold+=r;}delete S.b.c_guard;
  // 出撃の順番は廃止：いつも 盾→槍→歩→騎→弓 を一人ずつ交互
  S.opt.order=[2,1,0,4,3];S.opt.mix='alt';S.ver=26;
  if(S.bn>0){S.log.unshift({d:Math.floor(S.t/10)+1,text:__LT("前回は戦いの途中で閉じられた。戦っていた兵は本国に戻っている。",[]),k:'warn',c:'war'});}S.bn=0;}
let NOSAVE=false;// 読み込み直後は自動保存しない（読み込んだセーブを上書きしないため）
function save(){if(NOSAVE)return;try{S.bn=(typeof BATTLES!=='undefined')?BATTLES.filter(b=>!b.result).length:0;localStorage.setItem(SAVE_KEY,JSON.stringify(S))}catch(e){}}
const day=()=>Math.floor(S.t/10)+1;
let logDirty=true,unread=0,activeTab='home';
// 記録の分類：war=戦い dip=外交 home=内政（指定がなければ文から推し量る）
const guessCat=t=>/侵攻|撃退|攻め|城壁|援軍|連合|盟主|戦|invad|repel|attack|wall|reinforc|coalition|sovereign|battle|war\b|defen/i.test(t)?'war':/協定|関係|和平|属国|朝貢|同盟|反乱|併合|使者|島|pact|relation|truce|peace|vassal|tribute|allian|rebel|annex|envoy|island/i.test(t)?'dip':'home';
function log(text,kind,cat){S.log.unshift({d:day(),text,k:kind||'',c:cat||guessCat(text)});if(S.log.length>150)S.log.length=150;logDirty=true;if(activeTab!=='log')unread++;}
if(!S.log.length)log(__L("あなたは小さな国の盟主となった。民はひとり。戦場をタップして兵を集めよ。"),'big');

/* ---------- 計算 ---------- */
const cnt=t=>S.army[t].reduce((a,b)=>a+b,0);
const total=()=>S.army.reduce((a,r)=>a+r.reduce((x,y)=>x+y,0),0);
const typePow=t=>S.army[t].reduce((a,c,r)=>a+Math.floor(c)*RANKS[r].m,0)*TYPES[t].base*resPow(t);
const myPow=()=>{let p=0;for(let t=0;t<5;t++)p+=typePow(t);return p;};
function effMy(mix){let p=0;for(let t=0;t<5;t++){let m=0;for(let e=0;e<5;e++)m+=mix[e]*ADV[t][e];p+=typePow(t)*m;}return p;}
function effEn(E,mix){const P=myPow();if(P<=0)return E;let m=0;for(let e=0;e<5;e++){let a=0;for(let t=0;t<5;t++)a+=typePow(t)/P*ADV[e][t];m+=mix[e]*a;}return E*m;}
const chance=(P,E)=>P<=0?0:(P*P)/(P*P+E*E);
const bCost=b=>Math.ceil(b.base*Math.pow(b.mult,S.b[b.id]));
const uCost=u=>Math.ceil(u.base*Math.pow(u.mult,S.u[u.id]));
const tapAmt=()=>1+S.u.tap;
const has=id=>!!(S.res&&S.res[id]);
// 自軍の兵種ごとの強さ（研究・王朝・島の特色）
const resPow=t=>(t===0?(has('inf1')?1.2:1)*(trait().inf||1):1)*(t===1&&has('spear1')?1.15:1)*(1+0.1*(S.gen||0));
function uStat(side,t){const tr=trait();let spd=TYPES[t].spd*(tr.spd||1),rng=TYPES[t].rng,hp=TYPES[t].hp;
  if(t===4)spd*=tr.cav||1;if(t===3)rng*=tr.rng||1;if(t===2)hp*=tr.shield||1;
  if(side==='m'){if(t===3&&has('bow1'))rng*=1.2;if(t===2&&has('shield1'))hp*=1.25;if(t===4&&has('cav1'))spd*=1.2;}
  return {spd,rng,hp};}
const hoeAmt=()=>20*Math.pow(2,S.u.hoe);
// 城壁の耐久：基本300＋城壁強化1段ごとに200＋自軍の戦力の3割（国が育つと城も大きくなる）
const maxHp=()=>Math.round((300+S.b.wall*200+myPow()*0.3)*(has('wall1')?1.5:1));
const trainG=r=>Math.ceil(TRAIN_G[r]*(1-0.15*S.u.drill)*(has('drill2')?0.75:1));
const trainF=r=>5*(r+1);
// 属国の朝貢：金に加えて、その2倍の量の食料も届く
const TRIB_F=2;
function rates(){
  const fed=S.food>0;
  const solT=CAMP.map(c=>fed?(S.b[c.id]||0)*c.rate:0);
  const sol=solT.reduce((a,b)=>a+b,0);
  const campUse=CAMP.reduce((a,c,i)=>a+solT[i]*campFood(c),0);
  let food=S.b.farm*12*(has('farm1')?1.5:1)-campUse+(S.tributeF||0);
  let gold=S.b.market*0.5*(has('trade1')?2:1)+(S.tribute||0);
  const tax=[0.5,1,1.5][S.opt.tax];
  S.nat.forEach((n,i)=>{if(n.st==='vassal'){gold+=wealth(i)/200*tax;food+=wealth(i)/200*tax*TRIB_F;}else if(n.pact)gold+=wealth(i)/500;});
  return {food,sol,solT,gold};
}
function scaleArmy(f){for(const row of S.army)for(let r=0;r<5;r++)row[r]*=f;}
function removeType(t,amt){const row=S.army[t];for(let r=0;r<5&&amt>0;r++){const d=Math.min(row[r],amt);row[r]-=d;amt-=d;}}
function promote(f){for(const row of S.army)for(let r=3;r>=0;r--){const m=Math.floor(row[r]*f);row[r]-=m;row[r+1]+=m;}}

/* ---------- 戦場（遠近） ---------- */
const cv=$('#cv'),ctx=cv.getContext('2d');let W=0,H=0,DPR=1;
const INK='#121212',PAPER='#fafaf7',MID='#6a6a66',LINE='#d6d6d0';
const FD="'Dela Gothic One',sans-serif",FN="'DotGothic16',monospace";
let bgKey='',formKey='',dirty=true;
function resize(){const r=cv.getBoundingClientRect();DPR=Math.min(window.devicePixelRatio||1,2);W=r.width;H=r.height;cv.width=Math.max(1,Math.round(W*DPR));cv.height=Math.max(1,Math.round(H*DPR));bgKey='';formKey='';dirty=true;}
// 世界座標 x:0(左)〜1(右), z:0(手前)〜1(奥)
function proj(x,z){const p=1/(1+1.7*z);const hy=H*0.3,gy=H-12;const y=hy+(gy-hy)*(p-0.28)/0.72;const L=-0.02*W,Rr=1.04*W,vx=W*0.6;return [vx+(L+(Rr-L)*x-vx)*p,y,p];}
const K=()=>clamp(H/175,1.2,2.6);
const WALLX=0.1,GATEZ=0.5;

function fig(c,x,y,s,ty,face,enemy,ph,fall,flag,king,guard){
  c.save();c.translate(x,y);if(fall)c.rotate(-face*fall*1.45);c.scale(s*face,s);
  c.lineWidth=1.6;c.lineCap='round';c.lineJoin='round';c.strokeStyle=INK;
  const lg=ph==null?0:Math.sin(ph)*2.6;let hy=-16.3;
  c.beginPath();
  if(ty===4){
    const l2=ph==null?0:Math.sin(ph)*2.2;
    c.moveTo(6,-9);c.lineTo(9,-14);c.lineTo(11.5,-13);c.moveTo(-6,-9);c.lineTo(-8.5,-5.5);
    c.moveTo(-5,-6);c.lineTo(-5+l2,0);c.moveTo(-3,-6);c.lineTo(-3-l2,0);c.moveTo(3.5,-6);c.lineTo(3.5+l2,0);c.moveTo(5.5,-6);c.lineTo(5.5-l2,0);
    c.moveTo(0,-10);c.lineTo(0,-17);c.moveTo(0,-15);c.lineTo(4,-13.5);c.moveTo(1,-12);c.lineTo(13,-20);
    c.stroke();c.beginPath();c.rect(-6,-10,12,4);c.fillStyle=enemy?PAPER:INK;c.fill();c.stroke();
    hy=-20;
  }else{
    c.moveTo(0,-7);c.lineTo(-2.2+lg,0);c.moveTo(0,-7);c.lineTo(2.2-lg,0);c.moveTo(0,-7);c.lineTo(0,-13.5);
    c.moveTo(0,-12);c.lineTo(-3,-8.5);c.moveTo(0,-12);c.lineTo(3.2,-9.5);
    if(ty===1){c.moveTo(2.4,-4);c.lineTo(5,-25);}
    c.stroke();
    if(ty===2){c.beginPath();c.rect(2.6,-14.5,3.4,9);c.fillStyle=enemy?PAPER:INK;c.fill();c.stroke();}
    if(ty===3){c.beginPath();c.arc(2.8,-11,4.6,-1.25,1.25);c.stroke();c.beginPath();c.moveTo(2.8+4.6*Math.cos(-1.25),-11+4.6*Math.sin(-1.25));c.lineTo(2.8+4.6*Math.cos(1.25),-11+4.6*Math.sin(1.25));c.lineWidth=0.8;c.stroke();c.lineWidth=1.6;}
  }
  c.beginPath();c.arc(0,hy,2.6,0,Math.PI*2);
  if(enemy){c.fillStyle=PAPER;c.fill();c.stroke();}else{c.fillStyle=INK;c.fill();}
  // 旗持ち：国ごとの模様の旗（自軍は黒い旗）
  if(flag!=null&&!fall){c.lineWidth=1;c.beginPath();c.moveTo(-2.5,-4);c.lineTo(-2.5,-30);c.stroke();
    c.fillStyle=PAPER;c.beginPath();c.rect(-2.5,-30,9,6);c.fill();c.stroke();c.save();c.beginPath();c.rect(-2.5,-30,9,6);c.clip();c.fillStyle=INK;
    if(flag<0)c.fillRect(-2.5,-30,9,6);else{const pt=flag%5;
      if(pt===0){c.fillRect(-2.5,-28,9,2);}else if(pt===1){c.fillRect(0.5,-30,2,6);c.fillRect(-2.5,-28,9,2);}
      else if(pt===2){c.beginPath();c.arc(2,-27,1.6,0,7);c.fill();}else if(pt===3){c.beginPath();c.moveTo(-2.5,-30);c.lineTo(6.5,-24);c.lineTo(4,-24);c.lineTo(-2.5,-28);c.fill();}
      else{c.fillRect(-2.5,-30,4.5,3);c.fillRect(2,-27,4.5,3);}}
    c.restore();}
  // 近衛兵：かぶとの飾り羽と、斧のついた長柄
  if(guard){c.fillStyle=INK;c.beginPath();c.moveTo(-2.6,hy-1);c.lineTo(2.6,hy-1);c.lineTo(0,hy-3.6);c.closePath();c.fill();
    c.lineWidth=1.2;c.beginPath();c.moveTo(0,hy-3.4);c.quadraticCurveTo(-3,hy-8,-6,hy-5.5);c.stroke();
    if(!fall){c.beginPath();c.moveTo(4.6,-21.5);c.lineTo(8.2,-23);c.lineTo(8.6,-18.6);c.lineTo(4.1,-18.8);c.closePath();c.fill();}}
  if(king&&!fall){c.fillStyle=INK;c.beginPath();c.moveTo(-3.2,hy-2.2);c.lineTo(-3.2,hy-6);c.lineTo(-1.4,hy-4);c.lineTo(0,hy-7);c.lineTo(1.4,hy-4);c.lineTo(3.2,hy-6);c.lineTo(3.2,hy-2.2);c.closePath();c.fill();}
  c.restore();
}

// 背景（地面・城壁・野営地）をキャッシュ
const bgCv=document.createElement('canvas'),bgx=bgCv.getContext('2d');
const atkCv=document.createElement('canvas'),atx=atkCv.getContext('2d');
const MID2='#9a9a94';
function ground(c,x0,x1){
  c.fillStyle=PAPER;c.fillRect(0,0,W,H);
  const far=proj(0,1)[1];
  const R=rngOf(9);c.strokeStyle=MID;c.lineWidth=1;c.beginPath();c.moveTo(0,far);
  for(let x=0;x<=W+1;x+=W/48){c.lineTo(x,far-5-R()*22*(0.4+0.6*Math.sin(x/W*Math.PI)));}c.lineTo(W,far);c.stroke();
  // 遠くの木立
  c.strokeStyle=MID2;c.beginPath();for(let i=0;i<26;i++){const x=R()*W,h=4+R()*7;c.moveTo(x,far);c.lineTo(x,far-h);c.moveTo(x-2.5,far-h*0.4);c.lineTo(x,far-h);c.lineTo(x+2.5,far-h*0.4);}c.stroke();
  c.strokeStyle=INK;c.beginPath();c.moveTo(0,far);c.lineTo(W,far);c.stroke();
  c.strokeStyle=LINE;c.lineWidth=1;c.beginPath();
  for(let i=0;i<=10;i++){const z=i/10,a=proj(x0,z),b=proj(x1,z);c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);}
  for(let i=0;i<=12;i++){const x=x0+i*(x1-x0)/12,a=proj(x,0),b=proj(x,1);c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);}
  c.stroke();
  // 道
  c.setLineDash([4,5]);c.strokeStyle=MID2;c.beginPath();
  for(const dz of [-0.06,0.06]){const a=proj(x0,GATEZ+dz),b=proj(x1,GATEZ+dz*0.6);c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);}
  c.stroke();c.setLineDash([]);
  // 草
  c.strokeStyle=MID2;c.beginPath();
  for(let i=0;i<70;i++){const x=x0+R()*(x1-x0),z=R();if(Math.abs(z-GATEZ)<0.08)continue;const p=proj(x,z),s=3*K()*p[2];
    c.moveTo(p[0]-s,p[1]-s*1.3);c.lineTo(p[0],p[1]);c.lineTo(p[0]+s*0.4,p[1]-s*1.6);c.moveTo(p[0],p[1]);c.lineTo(p[0]+s,p[1]-s);}
  c.stroke();
}
// 城壁（X に立つ壁。dir=-1 なら内側が左、+1 なら右）
function drawWall(c,X,dir,seed,ts,lvl,keepIn){ts=ts||1;lvl=lvl||0;
  const k=K(),R=rngOf(seed),hm=1+0.035*Math.min(lvl,6);
  const wh=z=>50*k*proj(X,z)[2]*hm;
  const P=(z,f)=>{const p=proj(X,z);return [p[0],p[1]-wh(z)*f];};
  const quad=(z1,z2,a,b)=>{const p1=P(z1,a),p2=P(z2,a),p3=P(z2,b),p4=P(z1,b);c.beginPath();c.moveTo(p1[0],p1[1]);c.lineTo(p2[0],p2[1]);c.lineTo(p3[0],p3[1]);c.lineTo(p4[0],p4[1]);c.closePath();};
  const Z0=0.035,Z1=0.965,GH=0.085,GW=0.075;
  const inGate=(z)=>Math.abs(z-GATEZ)<GW;
  // 内側の斜線（城下）
  const n0=proj(X,0),n1=proj(X,1);
  if(!keepIn){c.save();c.beginPath();
  if(dir<0){c.moveTo(0,H);c.lineTo(n0[0],H);c.lineTo(n0[0],n0[1]);c.lineTo(n1[0],n1[1]);c.lineTo(0,n1[1]);}
  else{c.moveTo(W,H);c.lineTo(n0[0],H);c.lineTo(n0[0],n0[1]);c.lineTo(n1[0],n1[1]);c.lineTo(W,n1[1]);}
  c.closePath();c.clip();c.fillStyle=PAPER;c.fillRect(0,0,W,H);c.strokeStyle=LINE;c.lineWidth=1;c.beginPath();for(let x=-H;x<W;x+=7){c.moveTo(x,H);c.lineTo(x+H,0);}c.stroke();c.restore();}
  // 壁の足元の影
  c.strokeStyle=MID2;c.lineWidth=0.8;c.beginPath();
  for(let z=Z0;z<Z1;z+=0.012){if(inGate(z))continue;const p=proj(X,z),q=proj(X-dir*0.03,z+0.01);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}c.stroke();
  // 塔（奥）
  tower(c,X,Z1,dir,1.0*ts,seed+1);
  // 壁面
  c.lineJoin='round';
  c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.6;c.beginPath();
  const N=40;
  for(let i=0;i<=N;i++){const z=Z0+(Z1-Z0)*i/N,p=P(z,1);i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]);}
  for(let i=N;i>=0;i--){const z=Z0+(Z1-Z0)*i/N,p=P(z,0);c.lineTo(p[0],p[1]);}
  c.closePath();c.fill();c.stroke();
  // 石積み
  const bricks=(z1,z2,a,b,rows)=>{
    c.strokeStyle=MID;c.lineWidth=0.55;c.beginPath();
    for(let r=0;r<=rows;r++){const f=a+(b-a)*r/rows;for(let i=0;i<=24;i++){const z=z1+(z2-z1)*i/24,p=P(z,f);i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]);}}
    const cols=Math.round((z2-z1)*44);
    for(let r=0;r<rows;r++){const fa=a+(b-a)*r/rows,fb=a+(b-a)*(r+1)/rows,off=(r%2)*0.5;
      for(let j=0;j<cols;j++){const z=z1+(z2-z1)*(j+off)/cols;if(z<=z1||z>=z2)continue;if(a<0.7&&inGate(z)&&fa<0.75)continue;const p=P(z,fa),q=P(z,fb);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}}
    c.stroke();
    // ところどころ陰のある石
    c.strokeStyle=MID2;c.lineWidth=0.5;c.beginPath();
    for(let r=0;r<rows;r++){const fa=a+(b-a)*r/rows,fb=a+(b-a)*(r+1)/rows;
      for(let j=0;j<cols;j++){if(R()>0.13)continue;const za=z1+(z2-z1)*(j+(r%2)*0.5)/cols,zb=za+(z2-z1)/cols;if(zb>z2||inGate((za+zb)/2))continue;
        for(let h=1;h<=3;h++){const t=h/4,p=P(za+(zb-za)*t,fa),q=P(za+(zb-za)*Math.max(0,t-0.25),fb);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}}}
    c.stroke();
  };
  // 根石（傾斜した基部）
  c.strokeStyle=INK;c.lineWidth=1.1;c.beginPath();
  for(let i=0;i<=N;i++){const z=Z0+(Z1-Z0)*i/N,p=P(z,0.13);i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]);}c.stroke();
  c.strokeStyle=MID;c.lineWidth=0.6;c.beginPath();
  for(let z=Z0+0.01;z<Z1;z+=0.022){if(inGate(z))continue;const p=P(z,0),q=P(z+0.006,0.13);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}c.stroke();
  bricks(Z0,Z1,0.13,0.84,8);
  // 胸壁の帯（二重線）
  c.strokeStyle=INK;c.lineWidth=1.1;
  for(const f of [0.84,0.875]){c.beginPath();for(let i=0;i<=N;i++){const z=Z0+(Z1-Z0)*i/N,p=P(z,f);i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]);}c.stroke();}
  // 持ち送り（胸壁の下の小さな支え）
  c.lineWidth=0.7;c.beginPath();
  for(let z=Z0+0.008;z<Z1;z+=0.016){const p=P(z,0.84),q=P(z,0.8);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}c.stroke();
  // 矢狭間（十字）
  c.fillStyle=INK;
  for(let z=Z0+0.06;z<Z1-0.03;z+=0.09){if(Math.abs(z-GATEZ)<0.14)continue;const p=P(z,0.62),q=P(z,0.38),w=1.3*k*proj(X,z)[2];
    c.fillRect(p[0]-w/2,p[1],w,q[1]-p[1]);const m=P(z,0.5);c.fillRect(m[0]-w*2,m[1]-w/2,w*4,w);}
  // 狭間（凹凸）
  const NM=46;
  for(let i=NM-1;i>=0;i--){const za=Z0+(Z1-Z0)*i/NM,zb=za+(Z1-Z0)*0.55/NM;if(Math.abs((za+zb)/2-GATEZ)<0.12)continue;
    c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.1;quad(za,zb,0.995,1.15);c.fill();c.stroke();
    c.strokeStyle=MID;c.lineWidth=0.5;const p=P(za,1.12),q=P(zb,1.12);c.beginPath();c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);c.stroke();}
  // 門楼（門の上にせり上がる）
  const ga=GATEZ-0.12,gb=GATEZ+0.12;
  c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.6;quad(ga,gb,0.86,1.28);c.fill();c.stroke();
  bricks(ga,gb,0.88,1.28,3);
  for(let i=5;i>=0;i--){const za=ga+(gb-ga)*i/6,zb=za+(gb-ga)*0.55/6;c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.1;quad(za,zb,1.275,1.44);c.fill();c.stroke();}
  // 門楼の垂れ幕
  const ba=P(GATEZ-0.035,1.22),bb=P(GATEZ+0.035,1.22),bc=P(GATEZ+0.035,0.9),bd=P(GATEZ-0.035,0.9),bm=P(GATEZ,0.83);
  c.fillStyle=INK;c.beginPath();c.moveTo(ba[0],ba[1]);c.lineTo(bb[0],bb[1]);c.lineTo(bc[0],bc[1]);c.lineTo(bm[0],bm[1]);c.lineTo(bd[0],bd[1]);c.closePath();c.fill();
  const em=P(GATEZ,1.07),er=3.2*k*proj(X,GATEZ)[2];c.strokeStyle=PAPER;c.lineWidth=1.1;c.beginPath();c.arc(em[0],em[1],er,0,Math.PI*2);c.moveTo(em[0],em[1]-er*0.7);c.lineTo(em[0],em[1]+er*0.7);c.moveTo(em[0]-er*0.7,em[1]);c.lineTo(em[0]+er*0.7,em[1]);c.stroke();
  // 門（アーチ・迫石・落とし格子）
  const g1=GATEZ-GW*0.78,g2=GATEZ+GW*0.78,top=0.6,spring=0.4;
  const arch=(sc)=>{const pts=[];const zc=GATEZ,hw=(g2-g1)/2*sc;
    pts.push(P(zc-hw,0));pts.push(P(zc-hw,spring));
    for(let i=1;i<=16;i++){const a=Math.PI-i/16*Math.PI;const z=zc+Math.cos(a)*hw,f=spring+Math.sin(a)*(top-spring)*sc;pts.push(P(z,f));}
    pts.push(P(zc+hw,0));return pts;};
  const outer=arch(1.32);c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.2;c.beginPath();outer.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.fill();c.stroke();
  const inner=arch(1);
  // 迫石
  c.lineWidth=0.7;c.beginPath();for(let i=2;i<inner.length-1;i+=2){c.moveTo(inner[i][0],inner[i][1]);c.lineTo(outer[i][0],outer[i][1]);}c.stroke();
  c.fillStyle=INK;c.beginPath();inner.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.closePath();c.fill();
  // 上げられた落とし格子
  c.save();c.beginPath();inner.forEach((p,i)=>i?c.lineTo(p[0],p[1]):c.moveTo(p[0],p[1]));c.closePath();c.clip();
  c.strokeStyle=MID;c.lineWidth=0.9;c.beginPath();
  for(let i=1;i<6;i++){const z=g1+(g2-g1)*i/6,p=P(z,top+0.05),q=P(z,0.42);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}
  for(let f=0.44;f<top;f+=0.05){const p=P(g1,f),q=P(g2,f);c.moveTo(p[0],p[1]);c.lineTo(q[0],q[1]);}
  c.stroke();
  for(let i=1;i<6;i++){const z=g1+(g2-g1)*i/6,q=P(z,0.42);c.fillStyle=MID;c.beginPath();c.moveTo(q[0]-1.5,q[1]);c.lineTo(q[0]+1.5,q[1]);c.lineTo(q[0],q[1]+3);c.fill();}
  c.restore();
  // 開いた扉（両側の板戸）
  c.strokeStyle=INK;c.lineWidth=1;c.fillStyle=PAPER;
  for(const s of [-1,1]){const zh=s<0?g1:g2,zo=zh+s*0.004;const a=P(zh,0),b=P(zh,spring*0.95),o1=proj(X-dir*0.035,zo),o2=[o1[0],o1[1]-wh(zo)*spring*0.95];
    c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(o1[0],o1[1]);c.lineTo(o2[0],o2[1]);c.lineTo(b[0],b[1]);c.closePath();c.fill();c.stroke();
    c.beginPath();for(let t=0.25;t<1;t+=0.25){c.moveTo(a[0]+(o1[0]-a[0])*t,a[1]+(o1[1]-a[1])*t);c.lineTo(b[0]+(o2[0]-b[0])*t,b[1]+(o2[1]-b[1])*t);}c.lineWidth=0.5;c.stroke();c.lineWidth=1;}
  // 城壁強化が3段階以上なら、途中にも塔が立つ
  if(lvl>=3){tower(c,X,0.78,dir,0.7*ts,seed+3);}
  if(lvl>=5){tower(c,X,0.27,dir,0.75*ts,seed+4);}
  // 塔（手前）
  tower(c,X,Z0,dir,1.25*ts,seed+2);
}
function tower(c,X,z,dir,sc,seed){
  const k=K(),p=proj(X,z),wh=50*k*p[2],w=13*k*p[2]*sc,th=wh*1.62,x=p[0],y=p[1],ey=w*0.32,R=rngOf(seed);
  // 胴
  c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.6;
  c.beginPath();c.moveTo(x-w,y-th);c.lineTo(x-w,y);c.ellipse(x,y,w,ey,0,Math.PI,0,true);c.lineTo(x+w,y-th);c.ellipse(x,y-th,w,ey,0,0,Math.PI,false);c.closePath();c.fill();c.stroke();
  // 陰（右側に細い縦線）
  c.strokeStyle=MID2;c.lineWidth=0.6;c.beginPath();for(let i=1;i<=6;i++){const xx=x+w*(0.45+i*0.08);c.moveTo(xx,y-th+ey);c.lineTo(xx,y+ey*Math.sqrt(Math.max(0,1-((xx-x)/w)**2))-1);}c.stroke();
  // 石積み（楕円の弧）
  c.strokeStyle=MID;c.lineWidth=0.55;const rows=11;
  for(let r=1;r<rows;r++){const yy=y-th*r/rows;c.beginPath();c.ellipse(x,yy,w,ey,0,0,Math.PI,false);c.stroke();
    c.beginPath();for(let j=0;j<5;j++){const a=(j+(r%2)*0.5+0.5)/5*Math.PI,xx=x+Math.cos(a)*w,yb=yy+Math.sin(a)*ey;c.moveTo(xx,yb);c.lineTo(xx,yb-th/rows);}c.stroke();}
  // 窓
  c.fillStyle=INK;for(const f of [0.35,0.62]){const wy=y-th*f;c.fillRect(x-w*0.1,wy-w*0.45,w*0.2,w*0.45);c.beginPath();c.arc(x,wy-w*0.45,w*0.1,Math.PI,0);c.fill();}
  // 張り出し（石落とし）と狭間
  const ry=y-th,rw=w*1.18;
  c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.4;
  c.beginPath();c.moveTo(x-rw,ry-w*0.42);c.lineTo(x-rw,ry);c.ellipse(x,ry,rw,ey*1.1,0,Math.PI,0,true);c.lineTo(x+rw,ry-w*0.42);c.ellipse(x,ry-w*0.42,rw,ey*1.1,0,0,Math.PI,false);c.closePath();c.fill();c.stroke();
  c.lineWidth=0.8;c.beginPath();for(let j=0;j<=8;j++){const a=j/8*Math.PI,xx=x+Math.cos(a)*rw,yb=ry+Math.sin(a)*ey*1.1;c.moveTo(xx,yb);c.lineTo(xx-Math.cos(a)*w*0.15,yb+w*0.22);}c.stroke();
  for(let j=0;j<5;j++){const a=(j+0.25)/5*Math.PI,a2=(j+0.7)/5*Math.PI;const x1=x+Math.cos(a)*rw,x2=x+Math.cos(a2)*rw,y1=ry-w*0.42+Math.sin(a)*ey*1.1,y2=ry-w*0.42+Math.sin(a2)*ey*1.1;
    c.beginPath();c.moveTo(x1,y1);c.lineTo(x1,y1-w*0.32);c.lineTo(x2,y2-w*0.32);c.lineTo(x2,y2);c.fill();c.stroke();}
  // 円錐屋根
  const rt=ry-w*0.42,ap=rt-w*2.3;
  c.fillStyle=PAPER;c.lineWidth=1.5;c.beginPath();c.moveTo(x-rw*0.95,rt);c.lineTo(x,ap);c.lineTo(x+rw*0.95,rt);c.ellipse(x,rt,rw*0.95,ey,0,0,Math.PI,false);c.closePath();c.fill();c.stroke();
  c.strokeStyle=MID;c.lineWidth=0.55;c.beginPath();for(let j=1;j<10;j++){const a=j/10*Math.PI,xx=x+Math.cos(a)*rw*0.95,yb=rt+Math.sin(a)*ey;c.moveTo(x,ap);c.lineTo(xx,yb);}c.stroke();
  c.strokeStyle=MID2;c.beginPath();for(let r=1;r<5;r++){const t=r/5,yy=ap+(rt-ap)*t;c.moveTo(x-rw*0.95*t,yy);c.lineTo(x+rw*0.95*t,yy);}c.stroke();
  // 旗
  c.strokeStyle=INK;c.lineWidth=1.2;c.beginPath();c.moveTo(x,ap);c.lineTo(x,ap-w*1.4);c.stroke();
  c.fillStyle=INK;c.beginPath();c.moveTo(x,ap-w*1.4);c.quadraticCurveTo(x+w*0.6,ap-w*1.5,x+w*1.15,ap-w*1.2);c.quadraticCurveTo(x+w*0.6,ap-w*1.05,x,ap-w*0.95);c.fill();
}
// 城下の町並み：建てた施設が、城壁の向こうに屋根として見えるようになる
function drawCity(c){
  const k=K(),R=rngOf(5),items=[],hm=1+0.035*Math.min(S.b.wall,6);
  const nf=Math.min(6,S.b.farm),nm=Math.min(5,S.b.market),nc=Math.min(6,CAMP.reduce((a,x)=>a+(S.b[x.id]||0),0)),nr=Math.min(4,Object.keys(S.res||{}).length);
  const nh=Math.min(12,2+Math.floor((nf+nm+nc)/2));
  for(let i=0;i<nf;i++)items.push('mill');for(let i=0;i<nm;i++)items.push('market');for(let i=0;i<nc;i++)items.push('hall');for(let i=0;i<nr;i++)items.push('lib');for(let i=0;i<nh;i++)items.push('house');
  // 城壁に沿って奥から手前へ並べる（門の前後は少しあける）
  const zs=[];for(let i=0;i<items.length;i++){let z=0.22+R()*0.74;if(Math.abs(z-GATEZ)<0.1)z+=0.13;zs.push(Math.min(0.95,z));}
  items.sort(()=>R()-0.5);
  const list=items.map((it,i)=>[it,zs[i]]).sort((a,b)=>b[1]-a[1]);
  c.save();c.lineJoin='round';
  for(const [it,z] of list){const p=proj(WALLX,z),s=k*p[2]*1.5,top=p[1]-50*k*p[2]*hm*1.15,X=p[0]-(6+R()*12)*s,Y=top+4*s;
    c.strokeStyle=INK;c.fillStyle=PAPER;c.lineWidth=1.1;
    if(it==='mill'){c.beginPath();c.moveTo(X-4*s,Y);c.lineTo(X-2.5*s,Y-20*s);c.lineTo(X+2.5*s,Y-20*s);c.lineTo(X+4*s,Y);c.closePath();c.fill();c.stroke();
      const cx=X,cy=Y-20*s,a=R()*3;c.beginPath();for(let j=0;j<4;j++){const an=a+j*Math.PI/2;c.moveTo(cx,cy);c.lineTo(cx+Math.cos(an)*11*s,cy+Math.sin(an)*11*s);}c.stroke();
      c.lineWidth=0.6;c.beginPath();for(let j=0;j<4;j++){const an=a+j*Math.PI/2,ex=cx+Math.cos(an)*11*s,ey=cy+Math.sin(an)*11*s,px=-Math.sin(an)*3*s,py=Math.cos(an)*3*s;c.moveTo(cx+Math.cos(an)*4*s+px,cy+Math.sin(an)*4*s+py);c.lineTo(ex+px,ey+py);}c.stroke();}
    else if(it==='market'){c.beginPath();c.rect(X-7*s,Y-12*s,14*s,12*s);c.fill();c.stroke();c.beginPath();c.moveTo(X-9*s,Y-12*s);c.lineTo(X+9*s,Y-12*s);c.lineTo(X+6*s,Y-17*s);c.lineTo(X-6*s,Y-17*s);c.closePath();c.fill();c.stroke();
      c.fillStyle=INK;for(let j=0;j<4;j+=2)c.fillRect(X-9*s+j*4.5*s,Y-17*s,4.5*s,5*s);}
    else if(it==='hall'){c.beginPath();c.rect(X-12*s,Y-13*s,24*s,13*s);c.fill();c.stroke();c.beginPath();c.moveTo(X-13*s,Y-13*s);c.lineTo(X,Y-21*s);c.lineTo(X+13*s,Y-13*s);c.closePath();c.fill();c.stroke();
      c.beginPath();c.moveTo(X,Y-21*s);c.lineTo(X,Y-31*s);c.stroke();c.fillStyle=INK;c.beginPath();c.moveTo(X,Y-31*s);c.lineTo(X+8*s,Y-29*s);c.lineTo(X,Y-27*s);c.fill();}
    else if(it==='lib'){c.beginPath();c.rect(X-5*s,Y-26*s,10*s,26*s);c.fill();c.stroke();c.beginPath();c.moveTo(X-6.5*s,Y-26*s);c.lineTo(X,Y-35*s);c.lineTo(X+6.5*s,Y-26*s);c.closePath();c.fill();c.stroke();
      c.fillStyle=INK;c.fillRect(X-1.5*s,Y-21*s,3*s,4*s);}
    else{const hh=(9+R()*5)*s;c.beginPath();c.rect(X-6*s,Y-hh,12*s,hh);c.fill();c.stroke();c.beginPath();c.moveTo(X-7.5*s,Y-hh);c.lineTo(X,Y-hh-7*s);c.lineTo(X+7.5*s,Y-hh);c.closePath();c.fill();c.stroke();
      c.strokeStyle=MID;c.lineWidth=0.5;c.beginPath();c.moveTo(X-4*s,Y-hh-2*s);c.lineTo(X+4*s,Y-hh-2*s);c.stroke();}
  }
  c.restore();
}
function buildBg(){
  bgCv.width=cv.width;bgCv.height=cv.height;const c=bgx;c.setTransform(DPR,0,0,DPR,0,0);
  ground(c,WALLX,1.05);
  // 城下の斜線、その上に城壁の向こうの町並み、最後に城壁
  c.save();const n0=proj(WALLX,0),n1=proj(WALLX,1);c.beginPath();c.moveTo(0,H);c.lineTo(n0[0],H);c.lineTo(n0[0],n0[1]);c.lineTo(n1[0],n1[1]);c.lineTo(0,n1[1]);c.closePath();c.clip();
  c.fillStyle=PAPER;c.fillRect(0,0,W,H);c.strokeStyle=LINE;c.lineWidth=1;c.beginPath();for(let x=-H;x<W;x+=7){c.moveTo(x,H);c.lineTo(x+H,0);}c.stroke();c.restore();
  drawCity(c);
  drawWall(c,WALLX,-1,31,1,S.b.wall,true);
}
// 侵攻の場面：左に自軍の野営地、右に敵の城壁
const CAMPX=0.14,EFORTX=0.9,ECAMPX=0.86;
const defCv=document.createElement('canvas'),dfx=defCv.getContext('2d');
function tent(c,x,z,s,flag,enemy){
  const p=proj(x,z),k=K()*p[2]*s,X=p[0],Y=p[1];
  c.fillStyle=PAPER;c.strokeStyle=INK;c.lineWidth=1.3;
  // 奥行きのある三角テント
  c.beginPath();c.moveTo(X-14*k,Y);c.lineTo(X-4*k,Y-20*k);c.lineTo(X+14*k,Y-17*k);c.lineTo(X+20*k,Y-2*k);c.lineTo(X+2*k,Y);c.closePath();c.fill();c.stroke();
  c.beginPath();c.moveTo(X-14*k,Y);c.lineTo(X-4*k,Y-20*k);c.lineTo(X+2*k,Y);c.closePath();c.fill();c.stroke();
  c.fillStyle=INK;c.beginPath();c.moveTo(X-6*k,Y);c.lineTo(X-4*k,Y-11*k);c.lineTo(X-2*k,Y);c.closePath();c.fill();
  c.strokeStyle=MID;c.lineWidth=0.6;c.beginPath();for(let t=0.25;t<1;t+=0.25){c.moveTo(X-4*k+18*k*t,Y-20*k+3*k*t);c.lineTo(X+2*k+18*k*t,Y-2*k*t);}c.stroke();
  c.beginPath();c.moveTo(X-4*k,Y-20*k);c.lineTo(X-20*k,Y+1*k);c.moveTo(X+14*k,Y-17*k);c.lineTo(X+26*k,Y-1*k);c.stroke();
  if(flag){c.strokeStyle=INK;c.lineWidth=1;c.beginPath();c.moveTo(X-4*k,Y-20*k);c.lineTo(X-4*k,Y-30*k);c.stroke();
    c.fillStyle=enemy?PAPER:INK;c.beginPath();c.moveTo(X-4*k,Y-30*k);c.lineTo(X+5*k,Y-27.5*k);c.lineTo(X-4*k,Y-25*k);c.closePath();c.fill();c.stroke();}
}
// 野営地（X に柵。dir=-1 なら野営地は柵の左、+1 なら右）。敵の野営地は白い旗
function drawCamp(c,X,dir,enemy){
  const k=K();
  const T=[[0.11,0.92,0.9,false],[0.09,0.72,1,true],[0.05,0.3,1.1,false],[0.11,0.12,1.25,true],[0.04,0.86,0.85,false],[0.12,0.45,0.95,false]].map(([d,z,s2,f])=>[X+dir*d,z,s2,f]);
  T.filter(t=>t[1]>GATEZ).sort((a,b)=>b[1]-a[1]).forEach(([x,z,s2,f])=>tent(c,x,z,s2,f,enemy));
  // 柵
  c.strokeStyle=INK;c.lineWidth=1.2;c.fillStyle=PAPER;
  for(let z=0.98;z>=0.02;z-=0.03){if(Math.abs(z-GATEZ)<0.07)continue;const p=proj(X,z),h=16*k*p[2],w=1.6*k*p[2];
    c.beginPath();c.moveTo(p[0]-w,p[1]);c.lineTo(p[0]-w,p[1]-h);c.lineTo(p[0],p[1]-h-w*2);c.lineTo(p[0]+w,p[1]-h);c.lineTo(p[0]+w,p[1]);c.fill();c.stroke();}
  c.lineWidth=0.9;c.beginPath();for(const f of [0.35,0.75]){let first=true;for(let z=0.98;z>=0.02;z-=0.03){if(Math.abs(z-GATEZ)<0.07){first=true;continue;}const p=proj(X,z),h=16*k*p[2];if(first){c.moveTo(p[0],p[1]-h*f);first=false;}else c.lineTo(p[0],p[1]-h*f);}}c.stroke();
  // たき火
  const fp=proj(X+dir*0.06,0.52),fk=k*fp[2];c.strokeStyle=INK;c.lineWidth=1.6;c.beginPath();c.moveTo(fp[0]-6*fk,fp[1]);c.lineTo(fp[0]+6*fk,fp[1]-2*fk);c.moveTo(fp[0]-6*fk,fp[1]-2*fk);c.lineTo(fp[0]+6*fk,fp[1]);c.stroke();
  c.fillStyle=INK;c.beginPath();c.moveTo(fp[0]-4*fk,fp[1]-2*fk);c.quadraticCurveTo(fp[0]-3*fk,fp[1]-9*fk,fp[0],fp[1]-14*fk);c.quadraticCurveTo(fp[0]+1*fk,fp[1]-7*fk,fp[0]+4*fk,fp[1]-2*fk);c.fill();
  c.strokeStyle=MID2;c.lineWidth=0.8;c.beginPath();c.moveTo(fp[0],fp[1]-16*fk);c.quadraticCurveTo(fp[0]+5*fk,fp[1]-24*fk,fp[0]-2*fk,fp[1]-32*fk);c.stroke();
  T.filter(t=>t[1]<=GATEZ).sort((a,b)=>b[1]-a[1]).forEach(([x,z,s2,f])=>tent(c,x,z,s2,f,enemy));
}
function buildAtk(){
  atkCv.width=cv.width;atkCv.height=cv.height;const c=atx;c.setTransform(DPR,0,0,DPR,0,0);
  ground(c,0,EFORTX);
  drawWall(c,EFORTX,1,57,0.7);
  drawCamp(c,CAMPX,-1,false);
}
// 防衛戦：自国の城壁＋右に敵の野営地
function buildDef(){
  defCv.width=cv.width;defCv.height=cv.height;const c=dfx;c.setTransform(1,0,0,1,0,0);c.drawImage(bgCv,0,0);c.setTransform(DPR,0,0,DPR,0,0);
  drawCamp(c,ECAMPX,1,true);
}
function ensureBg(){const k=cv.width+'x'+cv.height+'|'+[S.b.farm,S.b.market,S.b.wall,CAMP.reduce((a,x)=>a+(S.b[x.id]||0),0),Object.keys(S.res||{}).length].map(v=>Math.min(v,14)).join(',');if(k!==bgKey){bgKey=k;buildBg();buildAtk();buildDef();}}

// 待機中の隊列（静止画をキャッシュ）
const formCv=document.createElement('canvas'),fx=formCv.getContext('2d');
const ORDER=[2,1,0,4,3];// 前から 盾 槍 歩 騎 弓
function formation(){
  const tot=Math.floor(total());const disp=Math.min(96,tot);const n=[0,0,0,0,0];
  if(tot>0){let s=0;for(let t=0;t<5;t++){n[t]=Math.floor(cnt(t))>0?Math.max(1,Math.round(disp*cnt(t)/tot)):0;s+=n[t];}
    while(s>disp){const t=n.indexOf(Math.max(...n));n[t]--;s--;}}
  return n;
}
// 隊列の位置（待機画面と戦闘開始時で共通）
function formSlots(n){
  const list=[];ORDER.forEach(t=>{for(let i=0;i<n[t];i++)list.push(t);});
  const rows=8;return list.map((t,i)=>{const col=Math.floor(i/rows),row=i%rows;return [0.54-col*0.033-(row%2)*0.012,0.08+row*(0.84/(rows-1)),t];});
}
function buildForm(n){ensureBg();
  formCv.width=cv.width;formCv.height=cv.height;const c=fx;c.setTransform(1,0,0,1,0,0);c.drawImage(bgCv,0,0);c.setTransform(DPR,0,0,DPR,0,0);
  const k=K(),pos=formSlots(n);
  pos.sort((a,b)=>b[1]-a[1]);
  for(const [x,z,t] of pos){const p=proj(x,z);fig(c,p[0],p[1],p[2]*k,t,1,false,null,0);}
  const tot=Math.floor(total());
  c.fillStyle=MID;c.font=`12px ${FN}`;c.textAlign='right';
  c.fillText(tot>96?__LT("描画 96 ／ 全 {0} 人",[fmt(tot)]):__LT("兵 {0} 人",[fmt(tot)]),W-10,H-6);
}

/* ---------- 戦闘（一人ずつ列で出てくる） ---------- */
// B.mode: 'def'=防衛戦（自軍は門から、敵は画面外から）／'atk'=侵攻（自軍は野営地から、敵は敵の城門から）
// BATTLES：同時に進む戦い。B は今計算・描画している戦い、VIEW は画面に映している戦い（null なら本国）
let B=null,BATTLES=[],VIEW=null,walkers=[],floaters=[];
const MAX_ATK=5;// 同時に攻められる国の数
const z5=()=>TYPES.map(()=>[0,0,0,0,0]);
// 戦いに出ている兵（倒れるか戻るまで、ほかの戦いには出せない）
const committed=(t,r)=>BATTLES.reduce((a,b)=>a+(b.com?b.com[t][r]:0),0);
const avail=(t,r)=>Math.max(0,Math.floor(S.army[t][r])-committed(t,r));
const availTotal=()=>{let a=0;for(let t=0;t<5;t++)for(let r=0;r<5;r++)a+=avail(t,r);return a;};
const availPow=()=>{let a=0;for(let t=0;t<5;t++)for(let r=0;r<5;r++)a+=avail(t,r)*RANKS[r].m*TYPES[t].base;return a;};
const defOn=()=>BATTLES.some(b=>b.mode==='def');
const atkOn=i=>BATTLES.some(b=>b.mode==='atk'&&b.i===i);
const SPAWN_GAP=0.85,EN_GAP=SPAWN_GAP/2,DMG=0.3;// 一人ずつの間隔と、戦いの遅さ（小さいほど長引く）
const CAPU=20000,FIELD_M=100,FIELD_E=100;// 戦場に同時に立てる人数の上限：味方100人・敵100人（それぞれ別々に数える）// CAPU：片側がこれを超える大軍のときだけ、両軍とも1体を数人分にまとめる
// 片側でこの数を超えると、1体が数人分の部隊になる（全員は必ず出撃する）
function mkUnit(side,t,x,z,pu,rep,r){const st=uStat(side,t),hp=pu*4*st.hp;return {side,t,r:r||0,x,z,lane:GATEZ+(Math.random()-0.5)*0.1,hp,max:hp,pu,rep:rep||0,ph:Math.random()*6,cd:Math.random(),rt:0,dead:0,gone:false,spd:st.spd,rng:st.rng,slow:0,charged:false};}
// 自軍を「列」に並べる。兵種が偏らないよう、盾・槍・歩・騎・弓を一人ずつ交互に。持っている兵は全員出る
function myQueue(g,frac){
  const q=[];g=g||1;frac=frac||1;
  // 兵種ごとに列を作り（階級の高い順）、盾→槍→歩→騎→弓の順に一人ずつ交互に出す
  // 送る人数を決め、兵種・階級ごとに割合どおり配る（端数は大きい順に1人ずつ）
  const want=frac>=1?availTotal():Math.max(1,Math.floor(availTotal()*frac));const cnts=z5(),rest=[];let got=0;
  for(let t=0;t<5;t++)for(let r=0;r<5;r++){const x=avail(t,r)*want/Math.max(1,availTotal());cnts[t][r]=Math.floor(x);got+=cnts[t][r];rest.push([x-Math.floor(x),t,r]);}
  rest.sort((a,b)=>b[0]-a[0]);for(const [fr,t,r] of rest){if(got>=want)break;if(cnts[t][r]<avail(t,r)){cnts[t][r]++;got++;}}
  const ord=(S.opt.order&&S.opt.order.length===5)?S.opt.order:ORDER;
  const lines=ord.map(t=>{const l=[];for(let r=4;r>=0;r--){let c=cnts[t][r];while(c>0){const rep=Math.min(g,c);c-=rep;l.push({t,r,pu:TYPES[t].base*RANKS[r].m*rep*resPow(t),rep});}}return l;});
  if(S.opt.mix==='group'){for(const l of lines)for(const u of l)q.push(u);}
  else for(let i=0;lines.some(l=>i<l.length);i++)for(const l of lines)if(i<l.length)q.push(l[i]);
  return q;
}
// 敵も国の兵力ぶんの兵を全員出す（兵力÷兵種の平均戦力＝人数）
const enemyMen=(i,E)=>{const mix=NATIONS[i].mix,avg=mix.reduce((a,m,t)=>a+m*TYPES[t].base,0);return Math.max(1,Math.round(E/avg));};
function enemyQueue(i,E,g,tag){
  const mix=NATIONS[i].mix;g=g||1;
  const men=enemyMen(i,E),N=Math.ceil(men/g),q=[];
  for(let j=0;j<N;j++){let r=Math.random(),t=0;while(t<4&&r>mix[t]){r-=mix[t];t++;}q.push({t,r:0,pu:0,rep:Math.min(g,men-j*g),ni:tag==null?i:tag,flag:j%8===3});}
  const tp=q.reduce((a,u)=>a+TYPES[u.t].base*u.rep,0);q.forEach(u=>u.pu=E*TYPES[u.t].base*u.rep/tp);
  const rk=[0,0,0,0,0];ORDER.forEach((t,k)=>rk[t]=k);q.sort((a,b)=>rk[a.t]-rk[b.t]);
  return q;
}
const qMen=q=>q.reduce((a,u)=>a+u.rep,0);
const mySpawn=()=>B.mode==='def'?[WALLX+0.012,GATEZ]:[CAMPX+0.01,GATEZ];
const enSpawn=()=>B.mode==='def'?[ECAMPX-0.01,GATEZ]:[EFORTX-0.012,GATEZ];
function startBattle(mode,i,E,opt){
  opt=opt||{};const allies=opt.allies||[];
  const Etot=E+allies.reduce((a,j)=>a+Math.floor(S.nat[j].power),0);
  const g=Math.max(1,Math.ceil(Math.max(total(),enemyMen(i,Etot))/CAPU));// 両軍とも同じまとめ方（大軍でなければ1体＝1人）
  B={mode,i,name:NATIONS[i].name,E,allies:allies.slice(),mq:[],eq:[],me:[],en:[],sm:0,se:0.8,arrows:[],result:null,t:0,tower:0,endT:0,killed:0,lost:0,gc:0,g,com:z5(),order:'adv',bowBack:false,king:null,etw:0,mtw:0,kmen:0};
  B.mq=myQueue(g,opt.frac||1);for(const q of B.mq)B.com[q.t][q.r]+=q.rep;
  B.gcom=0;
  if(mode==='def'&&S.guard>=1){const G=Math.floor(S.guard),gq=[];for(let k=0;k<G;k+=g){const rep=Math.min(g,G-k);gq.push({t:1,r:0,pu:guardPow()*rep,rep,guard:true});}
    B.gcom=G;const a=B.mq,out=[];let gi=0;const L=a.length,N=gq.length;
    // 近衛兵を列全体に均等に差しこむ
    for(let k=0;k<L;k++){while(gi<N&&(gi+0.5)*L/N<=k+0.5)out.push(gq[gi++]);out.push(a[k]);}
    while(gi<N)out.push(gq[gi++]);B.mq=out;}
  // 連合軍は最初からいっしょに出てくる
  B.eq=enemyQueue(i,E,g);for(const j of allies)B.eq=B.eq.concat(enemyQueue(j,Math.floor(S.nat[j].power),g));
  B.eq.sort((a,b)=>ORDER.indexOf(a.t)-ORDER.indexOf(b.t));
    // 両軍とも同じ間隔で一人ずつ出る。人数の多い側に合わせて、大軍のときだけ間隔を縮める（最短0.15秒）
  B.gm=clamp(60/Math.max(1,B.mq.length,B.eq.length),0.15,SPAWN_GAP);B.ge=B.gm;B.se=0;
  B.menM=qMen(B.mq);B.menE=qMen(B.eq);
  // 拠点の耐久：防衛戦は 自国の城壁（S.hp）対 敵の野営地、侵攻戦は 自軍の野営地 対 敵の城壁
  B.emax=Math.round(mode==='def'?60+Etot*0.25:100+E*0.4);B.ehp=B.emax;
  B.cmax=mode==='atk'?Math.round(60+B.mq.reduce((a,q)=>a+q.pu,0)*0.35):0;B.chp=B.cmax;
  // 矢倉の耐久：防衛戦は自国の矢倉、侵攻戦は敵の城壁の矢倉。弓兵が狙って壊せる
  B.etmax=mode==='atk'?Math.round(40+E*0.06):0;B.etw=B.etmax;B.mtmax=mode==='def'?Math.round((40+S.b.wall*40)*(has('wall1')?1.5:1)):0;B.mtw=B.mtmax;
  if(mode==='def')B.eq.forEach(q=>q.pu*=DIFF[S.opt.diff].epow);
  S.stats.maxAtk=Math.max(S.stats.maxAtk,BATTLES.filter(x=>x.mode==='atk'&&!x.result).length+(mode==='atk'?1:0));
  // 防衛戦：途中で敵の援軍（ほかの敵対国）や、味方の援軍（属国・協定国）が来ることがある
  if(mode==='def'){
    const busy=new Set([i,...allies]);
    const foes=S.nat.map((n,j)=>j).filter(j=>!busy.has(j)&&S.nat[j].st==='free'&&!S.nat[j].pact&&S.nat[j].rel<15&&S.nat[j].power<=E*1.5);
    if(foes.length&&Math.random()<0.35){const j=foes[Math.floor(Math.random()*foes.length)];B.reinf={j,at:25+Math.random()*35,p:Math.floor(S.nat[j].power*0.5)};}
    const pals=S.nat.map((n,j)=>j).filter(j=>S.nat[j].st==='vassal'||S.nat[j].pact);
    // いちばん力のある属国・協定国が来る
    if(pals.length&&Math.random()<0.4){const j=pals.reduce((x,y)=>S.nat[y].power>S.nat[x].power?y:x);B.friend={j,at:20+Math.random()*40,p:Math.floor(S.nat[j].power*(S.nat[j].pact?0.4:0.3))};}
  }
  BATTLES.push(B);VIEW=B;
  const label=allies.length?__LT("{0}ほか{1}か国の連合軍",[B.name,allies.length]):B.name;
  walkers=[];dirty=true;
  banner(mode==='def'?__LT("{0}が野営地から一列で攻めてくる！ タップで援軍",[label]):__LT("{0}へ出陣。野営地から一人ずつ出撃する",[B.name]),2800);renderAll();return B;
}
function startRaid(i,E,allies){return startBattle('def',i,E,{allies:allies||[],frac:S.defFrac||1});}
const dist=(a,b)=>Math.hypot(a.x-b.x,(a.z-b.z)*0.5);
const GC=40;
function grid(list){const g=new Map();for(const u of list){if(u.dead||u.gone)continue;const c=Math.floor(u.x*GC);let a=g.get(c);if(!a){a=[];g.set(c,a);}a.push(u);}return g;}
function nearest(u,G,dt){
  if(u.tg&&!u.tg.dead&&!u.tg.gone&&u.rt>0){u.rt-=dt;return [u.tg,dist(u,u.tg)];}
  u.rt=0.35+Math.random()*0.2;
  let best=null,bd=1e9,bs=1e9;const cx=Math.floor(u.x*GC);
  for(let r=0;r<=GC+4;r++){if(r>0&&(r-1)/GC>bs)break;
    for(const c of r?[cx-r,cx+r]:[cx]){const a=G.get(c);if(!a)continue;const n=Math.min(a.length,40),o=a.length>40?Math.floor(Math.random()*a.length):0;
      for(let j=0;j<n;j++){const v=a[(o+j)%a.length];const d=dist(u,v),sc=d+0.12*(v.foes||0)*(v===u.tg?0:1);if(sc<bs){bs=sc;bd=d;best=v;}}}}
  if(u.tg!==best){if(u.tg)u.tg.foes=Math.max(0,(u.tg.foes||0)-1);if(best)best.foes=(best.foes||0)+1;u.tg=best;}return [best,bd];}
// 拠点を攻めている相手の中から、近い順（多くの味方が向かっている相手は少し避ける）
function pickSiege(u,list){let best=null,bd=1e9,bs=1e9;for(const v of list){const d=dist(u,v),sc=d+0.05*(v.foes||0)*(v===u.tg?0:1);if(sc<bs){bs=sc;bd=d;best=v;}}
  if(u.tg!==best){if(u.tg)u.tg.foes=Math.max(0,(u.tg.foes||0)-1);best.foes=(best.foes||0)+1;u.tg=best;u.rt=0.3;}return [best,bd];}
function moveTo(u,x,z,ty,dt){const v=(u.spd||ty.spd)*(u.slow>0?0.25:1),dx=x-u.x,dz=(z-u.z)*0.5,d=Math.hypot(dx,dz)||1,s=Math.min(d,v*dt);u.x+=dx/d*s;u.z+=dz/d*s*2;u.ph+=dt*9;}
// 盾兵が近くにいると、その味方への矢が4割減る
function shieldNear(tg){const G=tg.side==='m'?B.Gm:B.Ge;if(!G)return false;const c=Math.floor(tg.x*GC);
  for(let k=c-2;k<=c+2;k++){const a=G.get(k);if(!a)continue;for(let j=0;j<Math.min(a.length,30);j++){const v=a[j];if(v!==tg&&v.t===2&&!v.dead&&Math.abs(v.x-tg.x)<0.06&&Math.abs(v.z-tg.z)<0.12)return true;}}return false;}
function hit(u,tg,dt){let dmg=u.pu*DMG*ADV[u.t][tg.t]*dt;
  if(u.t===4&&!u.charged){u.charged=true;dmg+=u.pu*DMG*ADV[4][tg.t]*(u.side==='m'&&has('cav1')?4.5:3);}// 騎兵の突撃（最初の一撃）
  if(u.t===3&&shieldNear(tg))dmg*=0.6;
  if(u.t===1&&tg.t===4)tg.slow=0.8;// 槍兵に構えられた騎兵は足が止まる
  if(u.king)dmg*=1;tg.hp-=dmg;if(u.t===3)shoot(u,tg,dt);}
function shoot(u,tg,dt){u.cd-=dt;if(u.cd<=0){u.cd=0.8;if(B===VIEW)sfx('arrow');B.arrows.push({x1:u.x,z1:u.z,h1:tg&&tg.h?2:0,x2:tg?tg.x:WALLX,z2:tg?tg.z:u.z,life:0.22});}}
const sdmg=(u,dt)=>u.pu*DMG*dt*(u.t===3?0.6:1)*(trait().siege||1);// 拠点への攻撃（弓は少し弱い）
function stepBattle(dt){
  const b=B;b.t+=dt;const decided=b.result!==null;
  for(const u of b.me)if(u.dead)u.dead+=dt;for(const u of b.en)if(u.dead)u.dead+=dt;
  // 一人ずつ出てくる
  if(!decided){
    // 一人ずつ出てくる。味方・敵それぞれ上限に達したら、その側は倒れて空きが出るまで待つ
    let aM=0,aE=0;for(const u of b.me)if(!u.dead&&!u.gone)aM++;for(const u of b.en)if(!u.dead&&!u.gone)aE++;const rM=b.mq.length+aM,rE=b.eq.length+aE;
    const capM=FIELD_M,capE=FIELD_E;
    b.sm-=dt;if(b.sm<=0&&b.mq.length&&aM<capM){const q=b.mq.shift(),[x,z]=mySpawn();{const u=mkUnit('m',q.t,x,z,q.pu,q.rep,q.r);u.ally=!!q.ally;if(q.guard){u.guard=true;u.hp*=GUARD_HP;u.max=u.hp;}u.flag=(b.me.length%10===4)||q.ally;b.me.push(u);}b.sm=b.gm;}
    if(b.sm<0)b.sm=0;
    b.se-=dt;if(b.se<=0&&b.eq.length&&aE<capE){const q=b.eq.shift(),[x,z]=enSpawn();{const u=mkUnit('e',q.t,x,z,q.pu,q.rep,0);u.flag=q.flag;u.ni=q.ni;b.en.push(u);}b.se=b.ge;}
    if(b.se<0)b.se=0;
  }
  if(!decided&&b.reinf&&b.t>=b.reinf.at){const r=b.reinf;b.reinf=null;const add=enemyQueue(r.j,r.p,b.g);b.eq=b.eq.concat(add);b.allies.push(r.j);b.menE+=qMen(add);
    const hp=Math.round(r.p*0.25);b.emax+=hp;b.ehp+=hp;S.nat[r.j].rel=clamp(S.nat[r.j].rel-10,-100,100);
    log(__LT("{0}が{1}に援軍{2}人を送ってきた。",[NATIONS[r.j].name,b.name,fmt(qMen(add))]),'warn');banner(__LT("{0}の援軍が到着！ 敵 +{1}人",[NATIONS[r.j].name,fmt(qMen(add))]),3000);}
  if(!decided&&b.friend&&b.t>=b.friend.at){const f=b.friend;b.friend=null;const add=enemyQueue(f.j,f.p,b.g).map(q=>Object.assign(q,{ally:true}));b.mq=b.mq.concat(add);b.menM+=qMen(add);
    S.nat[f.j].rel=clamp(S.nat[f.j].rel+3,-100,100);
    log(__LT("{0}の{1}が援軍{2}人を送ってくれた。",[S.nat[f.j].st==='vassal'?__L("属国"):__L("協定国"),NATIONS[f.j].name,fmt(qMen(add))]),'big');banner(__LT("{0}から味方の援軍 +{1}人！",[NATIONS[f.j].name,fmt(qMen(add))]),3000);}
  const homeX=mySpawn()[0],enHomeX=enSpawn()[0];
  const Gm=decided?null:grid(b.me),Ge=decided?null:grid(b.en);b.Gm=Gm;b.Ge=Ge;
  for(const u of b.me)if(u.slow>0)u.slow-=dt;for(const u of b.en)if(u.slow>0)u.slow-=dt;
  // 相手の出口（門・野営地）に張りつかないよう、追いかけるのはここまで
  const limE=homeX+0.06,limM=enHomeX-0.06;
  // 自分の拠点（城壁・野営地）を攻撃している相手は、最優先で狙う
  const sE=decided?[]:b.en.filter(u=>u.siege&&!u.dead&&!u.gone),sM=decided?[]:b.me.filter(u=>u.siege&&!u.dead&&!u.gone);
  // 敵
  for(const u of b.en){if(u.dead||u.gone)continue;const ty=TYPES[u.t];
    if(decided){moveTo(u,enHomeX,GATEZ,ty,dt);if(Math.abs(u.x-enHomeX)<0.015&&Math.abs(u.z-GATEZ)<0.03)u.gone=true;continue;}
    const was=u.siege;u.siege=false;
    if(sM.length&&!was){const [tg,d]=pickSiege(u,sM);if(d<=u.rng)hit(u,tg,dt);else moveTo(u,tg.x,tg.z,ty,dt);continue;}
    const [tg,d]=nearest(u,Gm,dt);
    // 拠点の前まで来た兵は、目の前に相手がいなければ拠点を叩く（弓兵は矢倉が残っていれば矢倉を先に）
    const atE=u.t===3?u.x<=homeX+u.rng-0.03:u.x<=limE+0.006;
    if(tg&&d<=u.rng)hit(u,tg,dt);
    else if(atE){u.siege=true;if(u.t===3&&b.mtw>0){b.mtw-=sdmg(u,dt);shoot(u,{x:homeX,z:0.035,h:1},dt);}
      else{if(b.mode==='def')S.hp-=sdmg(u,dt);else b.chp-=sdmg(u,dt);if(u.t===3)shoot(u,{x:homeX,z:u.z,h:1},dt);}}
    else if(tg&&d<0.5)moveTo(u,Math.max(tg.x,limE),tg.z,ty,dt);
    else moveTo(u,u.t===3?homeX+u.rng-0.04:limE,u.lane,ty,dt);
  }
  // 自軍
  for(const u of b.me){if(u.dead||u.gone)continue;const ty=TYPES[u.t];
    if(decided){moveTo(u,homeX,GATEZ,ty,dt);if(Math.abs(u.x-homeX)<0.012&&Math.abs(u.z-GATEZ)<0.03)u.gone=true;continue;}
    const was=u.siege;u.siege=false;
    const ord=b.order,back=u.t===3&&b.bowBack&&!u.king;
    if(sE.length&&!was&&ord!=='siege'&&!back){const [tg,d]=pickSiege(u,sE);if(d<=u.rng)hit(u,tg,dt);else moveTo(u,tg.x,tg.z,ty,dt);continue;}
    const [tg,d]=nearest(u,Ge,dt);
    if(tg&&d<=u.rng){hit(u,tg,dt);continue;}
    if(back){moveTo(u,homeX+(u.rng-0.04),u.lane,ty,dt);continue;}// 弓兵は後ろから射つ
    if(ord==='hold'){const hx=homeX+0.16;// 門の前で守る：守りの線より手前に来た敵だけ相手にし、深追いしない
      if(tg&&tg.x<hx+0.2)moveTo(u,tg.x,tg.z,ty,dt);else moveTo(u,hx,u.z+(u.lane-u.z)*0.02,ty,dt);continue;}
    const atM=u.t===3?u.x>=enHomeX-u.rng+0.03:u.x>=limM-0.006;
    if(atM){u.siege=true;if(u.t===3&&b.etw>0){b.etw-=sdmg(u,dt);shoot(u,{x:enHomeX,z:0.035,h:1},dt);}else{b.ehp-=sdmg(u,dt);if(u.t===3)shoot(u,{x:enHomeX,z:u.z,h:1},dt);}}
    else if(tg&&d<0.35&&ord!=='siege')moveTo(u,Math.min(tg.x,limM),tg.z,ty,dt);
    else moveTo(u,u.t===3?enHomeX-u.rng+0.04:limM,u.lane,ty,dt);
  }
  // 押し合い（重なりすぎないように）
  const sep=G=>{if(!G)return;for(const a0 of G.values()){const n=Math.min(a0.length,60);for(let i=0;i<n;i++){const a=a0[i];for(let j=i+1;j<Math.min(n,i+7);j++){const c=a0[j];
    const dx=a.x-c.x,dz=a.z-c.z;if(Math.abs(dx)<0.018&&Math.abs(dz)<0.035){const s=(dz>=0?1:-1)*0.15*dt;a.z=clamp(a.z+s,0.04,0.96);c.z=clamp(c.z-s,0.04,0.96);}}}}};
  sep(Gm);sep(Ge);
  // 矢倉（防衛戦のみ）
  if(!decided){b.tower-=dt;
    if(b.tower<=0){b.tower=1.1;
      if(b.mode==='def'&&b.mtw>0){let u=null;for(const e of b.en)if(!e.dead&&!e.gone&&e.x<0.5&&(!u||e.x<u.x))u=e;
        if(u){u.hp-=(2+S.b.wall*2)*(has('tower1')?2:1);b.arrows.push({x1:WALLX,z1:0.035,h1:1,x2:u.x,z2:u.z,life:0.25});}}
      if(b.mode==='atk'&&b.etw>0){let u=null;for(const e of b.me)if(!e.dead&&!e.gone&&e.x>0.5&&(!u||e.x>u.x))u=e;
        if(u){u.hp-=2+b.E*0.004;b.arrows.push({x1:EFORTX,z1:0.035,h1:1,x2:u.x,z2:u.z,life:0.25});}}}}
  for(const u of b.me)if(!u.dead&&u.hp<=0){u.dead=0.001;if(u.ally)continue;
    if(u.king){kingFell(b);continue;}
    if(u.guard){S.guard=Math.max(0,S.guard-u.rep);b.gcom=Math.max(0,(b.gcom||0)-u.rep);b.lost+=u.rep;S.stats.lost+=u.rep;if(b===VIEW)sfx('fall');continue;}
    const row=S.army[u.t],d=Math.min(row[u.r],u.rep);row[u.r]-=d;if(u.rep>d)removeType(u.t,u.rep-d);b.com[u.t][u.r]=Math.max(0,b.com[u.t][u.r]-u.rep);b.lost+=u.rep;S.stats.lost+=u.rep;
    S.wound[u.t][u.r]+=u.rep*(has('med1')?0.35:0.2);// 一部は負傷兵として戻る
    if(b===VIEW)sfx('fall');}
  for(const u of b.en)if(!u.dead&&u.hp<=0){u.dead=0.001;b.killed+=u.pu;b.kmen=(b.kmen||0)+u.rep;S.stats.kills+=u.rep;if(b===VIEW)sfx('hit');}
  // 倒れて時間のたった兵は一覧から外す（大軍でも軽く保つ）
  b.gc+=dt;if(b.gc>1){b.gc=0;b.me=b.me.filter(u=>!(u.gone||u.dead>3));b.en=b.en.filter(u=>!(u.gone||u.dead>3));}
  for(const a of b.arrows)a.life-=dt;b.arrows=b.arrows.filter(a=>a.life>0);
  if(!decided){
    const enOut=!b.eq.length&&b.en.every(u=>u.dead),meOut=!b.mq.length&&b.me.every(u=>u.dead);
    if(b.ehp<=0){b.ehp=0;b.why='struct';finish('win');}
    else if(b.mode==='def'){
      if(S.hp<=0){S.hp=0;finish('lose');}else if(enOut)finish('win');
    }else{if(b.chp<=0){b.chp=0;b.why='struct';finish('lose');}else if(enOut)finish('win');else if(meOut)finish('lose');}
  }else{
    b.endT+=dt;
    const done=b.me.every(u=>u.dead||u.gone)&&b.en.every(u=>u.dead||u.gone);
    if((done&&b.endT>2.5)||b.endT>25){BATTLES=BATTLES.filter(x=>x!==b);if(VIEW===b)VIEW=BATTLES.find(x=>!x.result)||BATTLES[0]||null;formKey='';dirty=true;renderAll();}
  }
}
function finish(res){
  const b=B;b.result=res;const n=S.nat[b.i];
  if(res==='win'){if(b.mode==='def'){S.stats.defWins++;if(b.allies.length)S.stats.coalWins++;}else S.stats.atkWins++;S.stats.maxWin=Math.max(S.stats.maxWin,b.menE||0);if(b.king&&!b.king.dead)S.stats.kingWins++;sfx('win');}
  else{if(b.mode==='def')S.stats.defLoss++;else S.stats.atkLoss++;sfx('lose');}
  b.flagT=0;
  if(b.mode==='def'){
    if(res==='win'){let ind=Math.floor(wealth(b.i)*0.25+b.E*3);for(const j of b.allies){ind+=Math.floor(wealth(j)*0.12);S.nat[j].rel=clamp(S.nat[j].rel-5,-100,100);}S.gold+=ind;n.rel=clamp(n.rel-5,-100,100);
      log(b.why==='struct'?__LT("{0}の野営地を焼き払い、敵を追い返した。賠償金{1}金を払わせた。兵{2}を失う。",[b.name,fmt(ind),fmt(b.lost)]):__LT("{0}の兵{1}人を撃退し、賠償金{2}金を払わせた。兵{3}を失う。",[b.allies.length?b.name+__L("ほか")+b.allies.length+__L("か国の連合軍"):b.name,fmt(b.menE),fmt(ind),fmt(b.lost)]),'big');
      banner(b.why==='struct'?__LT("敵の野営地を焼き払った！ 賠償金 +{0}金",[fmt(ind)]):__LT("撃退！ {0}から賠償金 +{1}金",[b.name,fmt(ind)]),3400);}
    else{const g=Math.floor(S.gold*0.3),f=Math.floor(S.food*0.35);S.gold-=g;S.food-=f;n.rel=clamp(n.rel-10,-100,100);for(const j of b.allies)S.nat[j].rel=clamp(S.nat[j].rel-5,-100,100);
      log(__LT("{0}に城壁を破られた。金{1}と食料{2}を奪われた。",[b.name,fmt(g),fmt(f)]),'warn');banner(__LT("城壁が破られた… 金 −{0}／食料 −{1}",[fmt(g),fmt(f)]),3400);}
  }else{
    if(res==='win'){const ind=wealth(b.i),loot=NATIONS[b.i].power*2;S.gold+=ind;S.food+=loot;n.st='vassal';n.pact=false;S.wins++;promote(0.1);
      S.nat.forEach((m,j)=>{if(j!==b.i&&m.st==='free')m.rel=clamp(m.rel-4,-100,100)});
      log(__LT("{0}に侵攻し{1}勝利。兵{2}を失う。賠償金{3}金と食料{4}を得て、{5}は属国となった。生き残りの一部が昇格した。",[b.name,b.why==='struct'?__L("、城壁を打ち破って"):'',fmt(b.lost),fmt(ind),fmt(loot),b.name]),'big');
      banner(__LT("勝利！ {0}を征服 ／ 賠償金 +{1}金",[b.name,fmt(ind)]),3400);onVassal(b.i);mapDirty=true;checkEnd();}
    else{n.rel=clamp(n.rel-(res==='retreat'?8:15),-100,100);n.power=Math.max(NATIONS[b.i].power*0.5,n.power-b.killed);
      log(__LT("{0}への侵攻は{1}。兵{2}を失い、敵兵{3}人を討った。",[b.name,res==='retreat'?__L("撤退"):b.why==='struct'?__L("野営地を焼かれて失敗"):__L("失敗"),fmt(b.lost),fmt(b.kmen||0)]),'warn');
      banner(__LT("{0}… {1}から退く ／ 兵 −{2}",[res==='retreat'?__L("撤退"):b.why==='struct'?__L("野営地を焼かれた"):__L("敗北"),b.name,fmt(b.lost)]),3400);}
  }
  renderAll();
}
// 盟主の出陣：1つの戦いに1回。強いが、倒れると金の2割を失い、2分は出陣できない
const kingPow=()=>Math.max(30,myPow()*0.04)*(has('king1')?2:1);
function sendKing(){const b=VIEW;if(!b||b.result||b.king||S.t<S.kingAt)return;
  const [x,z]=(B=b,mySpawn());const u=mkUnit('m',4,x,z,kingPow(),0,4);u.hp=u.max=u.pu*14;u.king=true;u.flag=true;b.me.push(u);b.king=u;
  log(__LT("盟主みずから{0}。",[b.mode==='def'?__L("城門を出て戦う"):b.name+__L("の戦場へ出陣した")]),'big','war');banner(__L("盟主が出陣！"),2000);sfx('horn');renderAll();}
function kingFell(b){const g=Math.floor(S.gold*0.2);S.gold-=g;S.kingAt=S.t+120;
  log(__LT("盟主が戦場で倒れ、手当てに金{0}を使った。2分は出陣できない。",[fmt(g)]),'warn','war');banner(__LT("盟主が倒れた… 金 −{0}",[fmt(g)]),3000);}
function retreat(){B=VIEW;if(B&&B.mode==='atk'&&!B.result){B.mq=[];finish('retreat');}}
function drawUnits(list){
  const k=K();list.sort((a,b)=>b.z-a.z);
  for(const u of list){if(u.gone||u.dead>2.5)continue;const p=proj(u.x,u.z);
    const fall=u.dead?Math.min(1,u.dead/0.35):0;if(u.dead)ctx.globalAlpha=Math.max(0.25,1-u.dead/2.5);
    const face=u.side==='e'?(B&&B.result&&!u.dead?1:-1):(B&&B.result&&!u.dead?-1:1);
    const sc=u.king?1.35:u.guard?1.15:1;fig(ctx,p[0],p[1],p[2]*k*sc,u.t,face,u.side==='e',u.dead?null:u.ph,fall,u.flag&&!u.guard?(u.side==='e'?u.ni:-1):null,u.king,u.guard);ctx.globalAlpha=1;}
}
function drawDamage(X,ratio,seed){
  if(ratio>0.6)return;const k=K(),n=ratio>0.3?2:ratio>0.1?4:6,R=rngOf(seed),t=performance.now()/1000;
  for(let i=0;i<n;i++){const z=0.12+R()*0.76,p=proj(X,z),s=k*p[2],y=p[1]-(18+R()*22)*s,x=p[0];
    ctx.fillStyle=INK;ctx.beginPath();const f=1+Math.sin(t*9+i)*0.15;ctx.moveTo(x-4*s,y);ctx.quadraticCurveTo(x-3*s,y-8*s*f,x,y-13*s*f);ctx.quadraticCurveTo(x+1*s,y-6*s,x+4*s,y);ctx.fill();
    ctx.strokeStyle=MID2;ctx.lineWidth=1;ctx.beginPath();for(let j=0;j<3;j++){const yy=y-15*s-j*9*s,xx=x+Math.sin(t*1.5+i+j)*4*s;ctx.moveTo(xx-4*s,yy);ctx.quadraticCurveTo(xx,yy-5*s,xx+4*s,yy);}ctx.stroke();}
}
function drawBattle(){
  const b=B,k=K();
  const brokenTower=(X)=>{const p=proj(X,0.035),s=k*p[2];ctx.strokeStyle=INK;ctx.lineWidth=2;ctx.beginPath();for(let i=0;i<3;i++){ctx.moveTo(p[0]-10*s+i*8*s,p[1]-70*s);ctx.lineTo(p[0]-4*s+i*8*s,p[1]-56*s);}ctx.stroke();};
  if(b.mode==='def'&&b.mtmax&&b.mtw<=0)brokenTower(WALLX);if(b.mode==='atk'&&b.etmax&&b.etw<=0)brokenTower(EFORTX);
  if(b.mode==='def'){drawDamage(WALLX,S.hp/maxHp(),11);drawDamage(ECAMPX+0.05,b.ehp/b.emax,12);}
  else{drawDamage(CAMPX-0.05,b.chp/b.cmax,13);drawDamage(EFORTX,b.ehp/b.emax,14);}drawUnits([...b.me,...b.en]);
  ctx.strokeStyle=INK;ctx.lineWidth=1;ctx.beginPath();
  for(const a of b.arrows){const p1=proj(a.x1,a.z1),p2=proj(a.x2,a.z2);ctx.moveTo(p1[0],p1[1]-(a.h1===1?78:12)*k*p1[2]);ctx.lineTo(p2[0],p2[1]-(a.h1===2?40:10)*k*p2[2]);}
  ctx.stroke();
  if(b.mode==='atk'&&b.result==='win'&&b.endT<4){const t=b.endT,p0=proj(EFORTX,GATEZ),s=K()*p0[2],x=p0[0],y=p0[1]-90*s;
    ctx.save();ctx.lineWidth=2;ctx.strokeStyle=INK;
    if(t<1.4){ctx.translate(x,y+40*s);ctx.rotate(Math.min(1.4,t)*1.1);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-50*s);ctx.stroke();ctx.fillStyle=PAPER;ctx.beginPath();ctx.rect(0,-50*s,26*s,16*s);ctx.fill();ctx.stroke();}
    else{const h=Math.min(1,(t-1.4)/1.2)*50*s;ctx.beginPath();ctx.moveTo(x,y+40*s);ctx.lineTo(x,y+40*s-55*s);ctx.stroke();ctx.fillStyle=INK;ctx.fillRect(x,y+40*s-h-6*s,26*s,16*s);}
    ctx.restore();}
  if(b.result&&b.endT<3){ctx.fillStyle=INK;ctx.textAlign='center';ctx.font=`${Math.round(clamp(W/8,36,76))}px ${FD}`;ctx.globalAlpha=Math.min(1,(3-b.endT)*2);
    ctx.fillText(b.result==='win'?(b.mode==='def'?__L("撃退"):__L("勝利")):b.result==='retreat'?__L("撤退"):__L("敗北"),W*0.58,H*0.48);ctx.globalAlpha=1;}
}

/* ---------- 天候 ---------- */
let WX=[];
function drawWeather(dt){const wx=trait().wx;if(!wx||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  if(wx==='rain'){if(WX.length!==90)WX=Array.from({length:90},()=>({x:Math.random()*W,y:Math.random()*H}));
    ctx.strokeStyle=MID2;ctx.lineWidth=1;ctx.beginPath();for(const d of WX){d.x+=-120*dt;d.y+=520*dt;if(d.y>H){d.y=-10;d.x=Math.random()*(W+80);}if(d.x<-10)d.x+=W+20;ctx.moveTo(d.x,d.y);ctx.lineTo(d.x+4,d.y-14);}ctx.stroke();}
  else if(wx==='snow'){if(WX.length!==70)WX=Array.from({length:70},()=>({x:Math.random()*W,y:Math.random()*H,s:1+Math.random()*2,ph:Math.random()*6}));
    ctx.fillStyle=PAPER;ctx.strokeStyle=MID;ctx.lineWidth=0.6;for(const d of WX){d.ph+=dt;d.y+=(25+d.s*12)*dt;d.x+=Math.sin(d.ph)*12*dt;if(d.y>H){d.y=-5;d.x=Math.random()*W;}ctx.beginPath();ctx.arc(d.x,d.y,d.s,0,7);ctx.fill();ctx.stroke();}}
  else if(wx==='fog'){const t=performance.now()/1000;ctx.save();for(let i=0;i<4;i++){const y=H*(0.25+i*0.16),x=((t*12*(i%2?1:-1)+i*200)%(W*2))-W*0.5;
    const g=ctx.createLinearGradient(0,y-30,0,y+30);g.addColorStop(0,'rgba(250,250,247,0)');g.addColorStop(0.5,'rgba(250,250,247,0.55)');g.addColorStop(1,'rgba(250,250,247,0)');ctx.fillStyle=g;ctx.fillRect(x,y-30,W*1.5,60);}ctx.restore();}
}

/* ---------- 描画ループ ---------- */
let last=performance.now();
function frame(now){
  const dt=Math.min(0.05,(now-last)/1000);last=now;
  B=VIEW;
  const wx=!!trait().wx;
  if(B||walkers.length||floaters.length||dirty||wx){
    dirty=false;ensureBg();ctx.setTransform(1,0,0,1,0,0);
    if(B){ctx.drawImage(B.mode==='atk'?atkCv:defCv,0,0);ctx.setTransform(DPR,0,0,DPR,0,0);drawBattle();}
    else{
      const n=formation(),key=bgKey+'|'+n.join(',');if(key!==formKey){formKey=key;buildForm(n);}
      ctx.drawImage(formCv,0,0);ctx.setTransform(DPR,0,0,DPR,0,0);
      for(const w of walkers){w.x+=0.22*dt;w.z+=(w.tz-w.z)*Math.min(1,dt*2);w.ph+=dt*10;}
      walkers=walkers.filter(w=>w.x<w.tx);drawUnits(walkers.slice());
    }
    drawWeather(dt);
    for(let i=floaters.length-1;i>=0;i--){const f=floaters[i];f.t+=dt;if(f.t>0.8){floaters.splice(i,1);continue;}
      ctx.globalAlpha=1-f.t/0.8;ctx.fillStyle=INK;ctx.font=`20px ${FN}`;ctx.textAlign='center';ctx.fillText(f.text,f.x,f.y-f.t*40);ctx.globalAlpha=1;}
    if(walkers.length||floaters.length)dirty=true;
  }
  requestAnimationFrame(frame);
}
new ResizeObserver(resize).observe(cv);resize();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{bgKey='';formKey='';dirty=true;mapDirty=true;});
requestAnimationFrame(frame);

/* ---------- 操作 ---------- */
let bannerT=0;
let AC=null,gS=null,gM=null,NB=null;
function audio(){if(AC)return AC;try{const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;AC=new A();gS=AC.createGain();gM=AC.createGain();gS.connect(AC.destination);gM.connect(AC.destination);
  NB=AC.createBuffer(1,AC.sampleRate*0.5,AC.sampleRate);const d=NB.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;setVol();}catch(e){AC=null;}return AC;}
function setVol(){if(!AC)return;const m=S.opt.mute?0:1;gS.gain.value=S.opt.sfx*m*0.5;gM.gain.value=S.opt.bgm*m*0.35;}
document.addEventListener('pointerdown',()=>{if(audio()&&AC.state==='suspended')AC.resume();},true);
const lastS={};
function tone(f0,f1,dur,type,vol,dest,at){const t=at||AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f0,t);if(f1)o.frequency.exponentialRampToValueAtTime(f1,t+dur);
  g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.01);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g);g.connect(dest||gS);o.start(t);o.stop(t+dur+0.02);}
function noise(dur,freq,q,vol,type,at){const t=at||AC.currentTime,src=AC.createBufferSource(),f=AC.createBiquadFilter(),g=AC.createGain();src.buffer=NB;f.type=type||'bandpass';f.frequency.value=freq;f.Q.value=q||1;
  g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);src.connect(f);f.connect(g);g.connect(gS);src.start(t);src.stop(t+dur+0.02);}
function sfx(kind){if(!AC||S.opt.mute||AC.state!=='running')return;const now=AC.currentTime,lim={hit:0.07,fall:0.12,tap:0.03,arrow:0.1}[kind]||0.05;if(lastS[kind]&&now-lastS[kind]<lim)return;lastS[kind]=now;
  if(kind==='tap')tone(700,420,0.09,'sine',0.5);
  else if(kind==='hit')noise(0.06,1800+Math.random()*800,3,0.35);
  else if(kind==='fall')noise(0.14,420,1,0.4,'lowpass');
  else if(kind==='arrow')noise(0.12,5000,2,0.15,'highpass');
  else if(kind==='win'){[523,659,784,1046].forEach((f,i)=>tone(f,0,0.35,'triangle',0.35,gS,now+i*0.11));}
  else if(kind==='lose'){[440,370,311].forEach((f,i)=>tone(f,0,0.45,'triangle',0.3,gS,now+i*0.18));}
  else if(kind==='horn'){tone(196,0,0.9,'sawtooth',0.18);tone(294,0,0.9,'sawtooth',0.1);}
  else if(kind==='ev'){tone(988,0,0.5,'sine',0.25);tone(1319,0,0.6,'sine',0.18,gS,now+0.15);}
  else if(kind==='build'){noise(0.05,900,2,0.3);noise(0.05,700,2,0.3,'bandpass',now+0.09);}
}
// 音楽：平時は笛のような静かな旋律、戦いのときは太鼓
const PENTA=[294,330,392,440,494,587,659];let mNext=0,mStep=0,mNote=3;
setInterval(()=>{if(!AC||AC.state!=='running'||S.opt.mute||S.opt.bgm<=0)return;const war=BATTLES.some(b=>!b.result);
  while(mNext<AC.currentTime+0.3){if(mNext<AC.currentTime)mNext=AC.currentTime+0.05;
    if(war){const pat=[1,0,0.5,0,1,0,0.6,0.3];const v=pat[mStep%8];if(v){tone(90,45,0.35,'sine',0.9*v,gM,mNext);if(mStep%8===4)noise(0.1,240,1,0.25,'lowpass',mNext);}mNext+=0.22;}
    else{if(Math.random()<0.55){mNote=clamp(mNote+Math.round(Math.random()*4-2),0,PENTA.length-1);const t=mNext,o=AC.createOscillator(),g=AC.createGain(),lf=AC.createOscillator(),lg=AC.createGain();
        o.type='sine';o.frequency.value=PENTA[mNote];lf.frequency.value=5;lg.gain.value=3;lf.connect(lg);lg.connect(o.frequency);
        g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.25,t+0.12);g.gain.exponentialRampToValueAtTime(0.0001,t+1.1);o.connect(g);g.connect(gM);o.start(t);lf.start(t);o.stop(t+1.2);lf.stop(t+1.2);}
      mNext+=0.7;}
    mStep++;}},250);
function onVassal(i){const n=S.nat[i];n.loy=60;
  // 併合していた国も属国になる
  S.nat.forEach((m,j)=>{if(m.st==='absorbed'&&m.owner===i){m.st='vassal';m.loy=60;log(__LT("{0}が治めていた{1}も、あわせて属国になった。",[NATIONS[i].name,NATIONS[j].name]),'big','dip');}});
  if(NATIONS[i].boss){S.stats.boss++;log(__LT("島の主「{0}」を従えた。外交タブから、いつでも次の島へ渡れる。",[NATIONS[i].name]),'big','dip');banner(__L("島の主を討った！ 次の島へ渡れる"),3400);}}
function banner(text,ms){const b=$('#banner');b.textContent=text;b.classList.add('on');clearTimeout(bannerT);bannerT=setTimeout(()=>b.classList.remove('on'),ms||2600);}
let tapType=0;
function recruit(x,y){
  if(S.ended)return;
  const t=tapType,ty=TYPES[t];let a=tapAmt();
  if(ty.cost>0){a=Math.min(a,Math.floor(S.food/ty.cost));if(a<1){banner(__LT("食料が足りない（{0}は一人 食料{1}）",[ty.name,ty.cost]),1600);return;}S.food-=a*ty.cost;}
  S.army[t][0]+=a;S.taps++;floaters.push({x,y,t:0,text:`${ty.name}+${a}`});dirty=true;sfx('tap');
  const V=VIEW;if(V&&!V.result){V.mq.push({t,r:0,pu:a*ty.base,rep:a});V.com[t][0]+=a;V.menM+=a;}
  else if(!V&&walkers.length<14){walkers.push({side:'m',t,x:WALLX+0.01,z:GATEZ,tz:0.1+Math.random()*0.8,tx:0.3+Math.random()*0.2,ph:0,delay:0,dead:0});}
  if(floaters.length>12)floaters.splice(0,floaters.length-12);
  if(S.taps===10)log(__L("兵が十人を超えた。外交タブの地図からポポ村を選んでみよう。"));
}
const stage=$('#stage');
stage.addEventListener('pointerdown',e=>{const r=cv.getBoundingClientRect();recruit(e.clientX-r.left,e.clientY-r.top);updateTop();});
stage.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();recruit(W*0.6,H/2);updateTop();}});
// 兵種ボタン（1〜5キーでも切り替え）
const tBtns=TYPES.map((t,i)=>{const b=document.createElement('button');b.className='b';b.type='button';
  b.innerHTML=__LT("<span class=\"tn\">{0}</span><small>{1}</small><small data-c>0人</small>",[t.name,t.cost?__LT("食料{0}",[t.cost]):__L("無料")]);
  b.title=__LT("{0}・戦力{1}",[t.note,t.base]);b.addEventListener('click',()=>{tapType=i;renderAll();});$('#tbar').appendChild(b);return {b,c:b.querySelector('[data-c]')};});
document.addEventListener('keydown',e=>{if(e.target.closest&&e.target.closest('input,textarea'))return;const k=+e.key;if(k>=1&&k<=5&&!e.metaKey&&!e.ctrlKey){tapType=k-1;renderAll();}});
$('#act-farm').addEventListener('click',()=>{S.food+=hoeAmt();updateTop();});

let selFrac=1;
function attack(i){
  const n=S.nat[i];if(n.st!=='free'||n.pact||atkOn(i)||S.ended||n.truce>S.t)return;
  if(BATTLES.filter(b=>b.mode==='atk').length>=MAX_ATK){banner(__LT("同時に攻められるのは{0}か国まで",[MAX_ATK]));return;}
  if(availTotal()*selFrac<1){banner(__L("出陣できる兵がいない。徴兵するか、戦いが終わるのを待とう"));return;}
  startBattle('atk',i,Math.floor(n.power),{frac:selFrac});
}
function trySchedRaid(){
  const P=myPow();
  const ok=i=>S.nat[i].st==='free'&&!S.nat[i].pact&&S.nat[i].truce<=S.t;
  const c=S.nat.map((n,i)=>i).filter(i=>ok(i)&&S.nat[i].rel<25&&!(NATIONS[i].per===2&&Math.random()<0.7));if(!c.length)return;
  const sc=i=>Math.abs(Math.log((S.nat[i].power+1)/(P*0.85+5)))-(NATIONS[i].per===0?0.8:0);
  c.sort((a,b)=>sc(a)-sc(b));
  const i=c[Math.random()<0.7?0:Math.min(1,c.length-1)];
  // 敵対する国が連合軍として加わることがある（1か国 30%・2か国 15%）
  const cand=S.nat.map((n,j)=>j).filter(j=>j!==i&&ok(j)&&S.nat[j].rel<10)
    .sort((a,b)=>Math.abs(Math.log((S.nat[a].power+1)/(P*0.35+5)))-Math.abs(Math.log((S.nat[b].power+1)/(P*0.35+5))));
  const roll=Math.random()/DIFF[S.opt.diff].coal,na=roll<0.15?2:roll<0.45?1:0,allies=cand.slice(0,Math.min(na,cand.length));
  S.war={i,E:Math.max(2,Math.floor(S.nat[i].power)),allies,due:null,holds:0};
  log(allies.length?__LT("{0}が{1}と連合を組み、宣戦を布告してきた。",[NATIONS[i].name,allies.map(j=>NATIONS[j].name).join(__L("・"))]):__LT("{0}が宣戦を布告してきた。",[NATIONS[i].name]),'warn');openWar();
}
/* ---------- 宣戦布告 ---------- */
const HOLD_SEC=150;let HOLD_MAX=3;
const peaceCost=w=>Math.ceil(wealth(w.i)*0.15+w.E*2+(w.allies||[]).reduce((a,j)=>a+wealth(j)*0.08+S.nat[j].power,0));
function openWar(){
  const w=S.war;if(!w)return;const d=NATIONS[w.i];
  const al=w.allies||[],who=al.length?__LT("{0}と{1}の連合軍",[d.name,al.map(j=>NATIONS[j].name).join(__L("・"))]):d.name;
  $('#warTitle').textContent=al.length?__L("連合軍の宣戦布告"):__L("宣戦布告");
  $('#warText').textContent=w.due===null?__LT("{0}が宣戦を布告してきた。迎え撃つか、開戦を先に延ばすかを決めてください。",[who]):__LT("{0}との開戦が保留されている（あと{1}秒）。",[who,Math.ceil(w.due-S.t)]);
  {const al=w.allies||[],Et=w.E+al.reduce((a2,j)=>a2+Math.floor(S.nat[j].power),0),men=enemyMen(w.i,w.E)+al.reduce((a2,j)=>a2+enemyMen(j,Math.floor(S.nat[j].power)),0);$('#warE').textContent=__LT("{0}（{1}人）",[fmt(Et),fmt(men)]);}$('#warMain').textContent=TYPES[d.main].name;$('#warP').textContent=fmt(availPow());updDef();
  HOLD_MAX=has('spy1')?4:3;const left=HOLD_MAX-w.holds;
  $('#warHoldS').textContent=left>0?__LT("{0}秒 延ばす（あと{1}回）",[HOLD_SEC,left]):__L("これ以上は延ばせない");$('#warHold').disabled=left<=0;
  const pc=peaceCost(w);$('#warPeaceS').textContent=__LT("{0}金",[fmt(pc)]);$('#warPeace').disabled=S.gold<pc;
  $('#warNote').textContent=__L("保留中も内政・軍団の操作や他国への遠征はできる。期限が来ると敵は攻めてくる（防衛戦の最中なら、その戦いが終わってから）。戦場をタップした兵は援軍として加わる。");
  if($('#warModal').hidden)sfx('horn');$('#warModal').hidden=false;
}
function closeWar(){$('#warModal').hidden=true;}
// 防衛に出す兵の割合（残りは本国で待機し、侵攻や次の戦いに使える）
const defRange=$('#defRange');
defRange.addEventListener('input',()=>{S.defFrac=(+defRange.value)/100;updDef();renderAll();});
function updDef(){const f=S.defFrac||1,v=Math.round(f*100);if(+defRange.value!==v)defRange.value=v;defRange.style.setProperty('--p',((v-1)/99*100)+'%');$('#defPct').textContent=v+'%';
  const av=availTotal();$('#warP').textContent=fmt(availPow()*f);$('#defNote').textContent=__LT("待機中の兵 {0}人のうち {1}人で守る（保留して期限が来たときも、この割合で出る）",[fmt(av),fmt(Math.floor(av*f))])+(S.guard>=1?__LT("。近衛兵 {0}人も全員が守りにつく",[fmt(Math.floor(S.guard))]):'');}
function warGo(){const w=S.war;if(!w)return;closeWar();
  if(defOn()){w.due=S.t;if(w.holds===undefined)w.holds=0;banner(__L("いまの防衛戦が終わり次第、迎え撃つ"));renderAll();return;} // 防衛戦が終わり次第
  S.war=null;S.nextRaid=S.t+100+Math.random()*60;startRaid(w.i,w.E,w.allies);}
$('#warGo').addEventListener('click',warGo);
$('#retreatBtn').addEventListener('pointerdown',e=>e.stopPropagation());
$('#retreatBtn').addEventListener('click',e=>{e.stopPropagation();retreat();});
$('#warChipGo').addEventListener('pointerdown',e=>e.stopPropagation());
$('#warChipGo').addEventListener('click',e=>{e.stopPropagation();warGo();});
$('#warChip').addEventListener('pointerdown',e=>e.stopPropagation());
$('#warHold').addEventListener('click',()=>{const w=S.war;if(!w||w.holds>=HOLD_MAX)return;w.holds++;w.due=S.t+HOLD_SEC;closeWar();
  log(__LT("{0}との開戦を{1}秒保留した。",[NATIONS[w.i].name,HOLD_SEC]));renderAll();});
$('#warPeace').addEventListener('click',()=>{const w=S.war;if(!w)return;const c=peaceCost(w);if(S.gold<c)return;S.gold-=c;
  S.nat[w.i].rel=clamp(S.nat[w.i].rel+5,-100,100);for(const j of (w.allies||[]))S.nat[j].rel=clamp(S.nat[j].rel+3,-100,100);S.war=null;closeWar();S.nextRaid=S.t+100+Math.random()*60;
  log(__LT("{0}に和平金{1}金を払い、兵を退かせた。",[NATIONS[w.i].name,fmt(c)]));banner(__L("和平が成立した"));renderAll();});
$('#warModal').addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#warHold').disabled)$('#warHold').click();});
function checkEnd(){if(S.nat.every(n=>n.st==='vassal'||(n.st==='absorbed'&&S.nat[n.owner].st==='vassal'))&&!S.ended){S.ended=true;
  const add=NATIONS.reduce((a,d,i)=>a+wealth(i)/200,0)*0.5;S.tribute=(S.tribute||0)+add;S.tributeF=(S.tributeF||0)+add*TRIB_F;S.stats.isles++;
  log(__LT("{0}の{1}か国すべてが膝をついた。島を統一した。",[islandName(S.island),NN]),'big');save();showEnd();}}
function nextIsland(){
  S.island=(S.island||0)+1;NATIONS=makeNations(S.island);NN=NATIONS.length;
  S.nat=NATIONS.map(d=>({power:d.power,rel:Math.round(Math.random()*20-10),st:'free',pact:false,sat:0,loy:60,truce:0}));
  S.war=null;closeWar();S.nextRaid=S.t+200;S.nextEv=S.t+150;S.nextNW=S.t+240;S.ended=false;B=null;BATTLES=[];VIEW=null;walkers=[];formKey='';dirty=true;
  log(__LT("船団が{0}に上陸した。{1}の国がひしめいている。",[islandName(S.island),NN]),'big');banner(__LT("{0}に上陸！",[islandName(S.island)]),3000);
  buildConq();own=null;$('#mapWait').hidden=false;mapImgKey='';
  setTimeout(()=>{genMap();$('#mapWait').hidden=true;selNat=0;mapDirty=true;renderAll();},60);
  save();renderAll();
}
function showEnd(){
  $('#endTitle').textContent=__L("島を統一");
  $('#endTxt').textContent=__LT("第{0}日、{1}の{2}か国すべてを従えた。この島の属国からは、海を隔てても朝貢の半分が届く（遠い島からの朝貢 毎秒+{3}金・+{4}食料）。兵・金・施設をそのまま連れて、海の向こうの{5}へ渡ろう。",[day(),islandName(S.island),NN,fmt(S.tribute),fmt(S.tributeF),islandName(S.island+1)]);
  $('#againBtn').textContent=__LT("{0}へ渡る",[islandName(S.island+1)]);$('#end').hidden=false;}

function price(i,kind){const n=S.nat[i];const base=NATIONS[i].foodP*(NATIONS[i].per===1?1.3:1)*(has('trade1')?1.3:1);return Math.max(0.1,base/(1+n.sat)*(1+n.rel/200));}
function trade(i,kind){
  const n=S.nat[i];if(n.st!=='free')return;const amt=kind==='food100'?100:10;
  if(S.food<amt)return;
  S.gold+=price(i,'food')*amt;S.food-=amt;n.sat+=amt/100-0.1;
  n.sat+=0.1;const was=n.rel;n.rel=clamp(n.rel+2,-100,100);
  if(was<20&&n.rel>=20)log(__LT("{0}との関係が深まった。協定を結べる。",[NATIONS[i].name]));
  renderAll();
}
const pactCost=i=>Math.ceil(wealth(i)*0.4*(NATIONS[i].per===1?0.8:1));
const truceCost=i=>Math.ceil(wealth(i)*0.1);
const giftCost=i=>Math.ceil(Math.max(50,wealth(i)*0.05));
const TRUCE_SEC=600;
function pact(i){const n=S.nat[i],c=pactCost(i);if(n.st!=='free'||n.pact||n.rel<20||S.gold<c)return;
  S.gold-=c;n.pact=true;n.rel=clamp(n.rel+10,-100,100);log(__LT("{0}と交易協定を結んだ。毎秒{1}金が入る。",[NATIONS[i].name,(wealth(i)/500).toFixed(1)]),'big');mapDirty=true;renderAll();}

/* ---------- 軍団の操作 ---------- */
let selRank=0,selAmt=10;
const AMTS=[[1,'×1'],[10,'×10'],[100,'×100'],[1e12,__L("全員")]];
function train(t){
  const r=selRank;if(r>=4)return;const g=trainG(r),f=trainF(r);
  const n=Math.min(selAmt,avail(t,r),Math.floor(S.gold/g),Math.floor(S.food/f));if(n<1){if(avail(t,r)<1&&S.army[t][r]>=1)banner(__L("その兵はいま戦いに出ている"));return;}
  S.army[t][r]-=n;S.army[t][r+1]+=n;S.gold-=n*g;S.food-=n*f;
  if(r===3)log(__LT("{0}{1}人が英雄となった。",[TYPES[t].name,n]));
  renderAll();
}

/* ---------- 勝率の試算（実際の戦いを簡単にした計算を何回か回す） ---------- */
function simOnce(i,E,frac){
  const mk=(q,side)=>({t:q.t,pu:q.pu,hp:q.pu*4*uStat(side,q.t).hp,at:0});
  // 大軍は両軍とも同じ人数ずつ1体にまとめ、片側およそ300体までにして速く計算する
  const menM=Math.max(1,frac>=1?availTotal():Math.floor(availTotal()*frac)),menE=enemyMen(i,E);
  const g=Math.max(1,Math.ceil(Math.max(menM,menE)/300));
  let mq=myQueue(g,frac).map(q=>mk(q,'m')),eq=enemyQueue(i,E,g).map(q=>mk(q,'e'));
  if(!mq.length)return {win:false,t:0};
  const capM=Math.max(1,Math.round(FIELD_M/g)),capE=Math.max(1,Math.round(FIELD_E/g));
  const gap=clamp(60/Math.max(1,menM,menE),0.15,SPAWN_GAP)*g,dt=0.5,walk=6;
  let mi=0,ei=0;
  let fm=[],fe=[],tm=0,te=0,ehp=100+E*0.4,chp=60+mq.reduce((a,q)=>a+q.pu,0)*0.35,t=0;
  const pull=(field,q,tt,cap,side)=>{let k=side?mi:ei;while(tt<=t&&k<q.length&&field.length<cap){const u=q[k++];u.at=t+walk;field.push(u);tt+=gap;}if(side)mi=k;else ei=k;return Math.max(tt,t-gap);};
  const dmgOf=(atk,def)=>{if(!def.length)return 0;const mix=[0,0,0,0,0];def.forEach(u=>mix[u.t]++);let d=0;for(const u of atk){let m=0;for(let e=0;e<5;e++)m+=mix[e]*ADV[u.t][e];d+=u.pu*DMG*m/def.length;}return d*dt;};
  const apply=(field,d)=>{let k=0;while(d>0&&k<field.length){const u=field[k];if(u.at>t){k++;continue;}const x=Math.min(d,u.hp);u.hp-=x;d-=x;k++;}return field.filter(u=>u.hp>0.01);};
  for(;t<2400;t+=dt){
    tm=pull(fm,mq,tm,capM,1);te=pull(fe,eq,te,capE,0);
    const am=fm.filter(u=>u.at<=t),ae=fe.filter(u=>u.at<=t);
    if(am.length&&ae.length){const dE=dmgOf(am,ae),dM=dmgOf(ae,am);fe=apply(fe,dE);fm=apply(fm,dM);}
    else if(am.length&&!ae.length)ehp-=am.reduce((a,u)=>a+u.pu,0)*DMG*dt;
    else if(ae.length&&!am.length)chp-=ae.reduce((a,u)=>a+u.pu,0)*DMG*dt;
    if(ehp<=0||(ei>=eq.length&&!fe.length))return {win:true,t};
    if(chp<=0||(mi>=mq.length&&!fm.length))return {win:false,t};
  }
  return {win:false,t};
}
const simCache={};let simBusy=false;
// 兵力は少しずつ増えるので、約10%きざみで同じとみなす（毎秒計算し直さない）
const bucket=v=>v<=0?0:Math.round(Math.log(v)/Math.log(1.1));
function simEstimate(i){
  const key=`${S.island}|${i}|${Math.round(selFrac*20)}|${bucket(availPow())}|${bucket(S.nat[i].power)}|${S.opt.order.join('')}${S.opt.mix}|${Object.keys(S.res).length}`;
  const c=simCache[i];if(c&&c.key===key)return c;
  if(!simBusy){simBusy=true;const runs=has('spy1')?12:6,E=Math.floor(S.nat[i].power),fr=selFrac;let k=0,w=0,tw=0;
    // 1回ずつ間をあけて計算し、画面が止まらないようにする
    const step=()=>{if(!S.nat[i]){simBusy=false;return;}const r=simOnce(i,E,fr);if(r.win){w++;tw+=r.t;}k++;
      if(k<runs)setTimeout(step,16);else{simCache[i]={key,p:w/runs,t:w?tw/w:0,runs};simBusy=false;dirty=true;}};
    setTimeout(step,30);}
  return c||null;
}

/* ---------- 世界地図 ---------- */
const MW=600,MH=400,MSEED=20261105;
let own=null,cent=null,mapDirty=true,mapImgKey='',selNat=0;
const mapCv=$('#map'),mctx=mapCv.getContext('2d');
const mapImg=document.createElement('canvas');mapImg.width=MW;mapImg.height=MH;const mi=mapImg.getContext('2d');
function genMap(){
  const ISEED=MSEED+(S.island||0)*7919;
  const hash=(i,j)=>{let h=(i*374761393+j*668265263+ISEED)|0;h=Math.imul(h^(h>>>13),1274126177);return((h^(h>>>16))>>>0)/4294967296;};
  const vn=(x,y)=>{const i=Math.floor(x),j=Math.floor(y),fx=x-i,fy=y-j,u=fx*fx*(3-2*fx),v=fy*fy*(3-2*fy);const a=hash(i,j),b=hash(i+1,j),c=hash(i,j+1),d=hash(i+1,j+1);return a+(b-a)*u+(c-a)*v+(a-b-c+d)*u*v;};
  const fbm=(x,y)=>{let s=0,a=0.5,f=1;for(let k=0;k<5;k++){s+=a*vn(x*f,y*f);f*=2.03;a*=0.5;}return s/0.97;};
  const land=new Uint8Array(MW*MH);
  for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){const nx=x/MW,ny=y/MH;const e=fbm(nx*3.2,ny*3.2)*0.7+fbm(nx*9+5,ny*9+2)*0.3;const d=((nx-0.5)/0.5)**2+((ny-0.5)/0.47)**2;if(e-d*0.5>0.08)land[y*MW+x]=1;}
  const R=rngOf(7+(S.island||0)*97),seeds=[];let best=null,bd=1e9;
  for(let y=0;y<MH;y+=2)for(let x=0;x<MW;x+=2)if(land[y*MW+x]){const d=(x-MW*0.14)**2+(y-MH*0.76)**2;if(d<bd){bd=d;best=[x,y];}}
  seeds.push(best);let tries=0,md=52;
  while(seeds.length<NN+1&&tries<400000){tries++;if(tries%4000===0)md*=0.9;const x=R()*MW|0,y=R()*MH|0;if(!land[y*MW+x])continue;if(seeds.every(s=>(s[0]-x)**2+(s[1]-y)**2>md*md))seeds.push([x,y]);}
  const h=seeds[0],rest=seeds.slice(1).sort((a,b)=>((a[0]-h[0])**2+(a[1]-h[1])**2)-((b[0]-h[0])**2+(b[1]-h[1])**2));
  const sd=[h,...rest],wt=sd.map((s,k)=>k===0?0.75:0.8+0.55*(k-1)/(NN-1));
  own=new Int8Array(MW*MH).fill(-1);const sx=new Float64Array(sd.length),sy=new Float64Array(sd.length),sc=new Float64Array(sd.length);
  for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){const i=y*MW+x;if(!land[i])continue;
    const wx=x+(fbm(x/45,y/45)-0.5)*70+(vn(x/9,y/9)-0.5)*7,wy=y+(fbm(x/45+11,y/45+7)-0.5)*70+(vn(x/9+4,y/9+9)-0.5)*7;
    let b=0,bv=1e18;for(let k=0;k<sd.length;k++){const dx=wx-sd[k][0],dy=wy-sd[k][1];const d=(dx*dx+dy*dy)/(wt[k]*wt[k]);if(d<bv){bv=d;b=k;}}
    own[i]=b;}
  // 近い順の領土に、弱い順の国を割り当てる
  const order=NATIONS.map((d,i)=>i).sort((a,b)=>NATIONS[a].power-NATIONS[b].power);
  const rk=new Int8Array(sd.length);rk[0]=0;for(let k=1;k<sd.length;k++)rk[k]=order[k-1]+1;
  const sp=new Array(sd.length);for(let k=0;k<sd.length;k++)sp[rk[k]]=sd[k];
  for(let i=0;i<own.length;i++){const o=own[i];if(o>=0){const v=rk[o];own[i]=v;sx[v]+=i%MW;sy[v]+=(i/MW)|0;sc[v]++;}}
  cent=[];for(let k=0;k<sd.length;k++){cent.push(sc[k]?[sx[k]/sc[k],sy[k]/sc[k],sc[k]]:[sp[k][0],sp[k][1],1]);}
  for(let k=0;k<sd.length;k++){const c=cent[k];if(own[(c[1]|0)*MW+(c[0]|0)]!==k){c[0]=sp[k][0];c[1]=sp[k][1];}}
  // 隣り合う国（他国どうしの戦争に使う）
  ADJ=NATIONS.map(()=>new Set());for(let y=0;y<MH-1;y++)for(let x=0;x<MW-1;x++){const i=y*MW+x,a=own[i];for(const j of [i+1,i+MW]){const b=own[j];if(a>0&&b>0&&a!==b){ADJ[a-1].add(b-1);ADJ[b-1].add(a-1);}}}
}
let ADJ=null;
// 地図での見た目の持ち主（併合された国は、併合した国の色）
const dispOf=k=>{if(k<1)return k;let n=S.nat[k-1],g=0;while(n&&n.st==='absorbed'&&g<10){k=n.owner+1;n=S.nat[n.owner];g++;}return k;};
function buildMapImg(){
  const im=mi.createImageData(MW,MH),d=im.data;
  const st=S.nat.map(n=>n.st==='vassal'?2:n.pact?1:0);const dm=new Int8Array(NN+1);for(let k=0;k<=NN;k++)dm[k]=dispOf(k);
  const ow=k=>k<0?k:dm[k];
  for(let y=0;y<MH;y++)for(let x=0;x<MW;x++){
    const i=y*MW+x,o=ow(own[i]);let v=250;
    const r=x<MW-1?ow(own[i+1]):o,b=y<MH-1?ow(own[i+MW]):o,border=r!==o||b!==o;
    if(o<0){v=border?18:(y%8===0&&((x>>3)+(y>>3))%4!==0)?222:250;}
    else{
      const k=o-1,s=k>=0?st[k]:-1;
      if(border){v=(s===2&&r>=1&&b>=1&&st[r-1]===2&&st[b-1]===2)?110:18;}
      else if(o===0)v=250;
      else if(k===selNat&&s!==2)v=((x+y)%4===0||((x-y)%4+4)%4===0)?18:250;
      else if(s===2)v=k===selNat?((x+y)%4===0?250:18):18;
      else if(s===1)v=(x%4===0&&y%4===0)?18:250;
      else v=(x+y)%6===0?150:250;
    }
    const p=i*4;d[p]=v;d[p+1]=v;d[p+2]=v>200?v-3:v;d[p+3]=255;
  }
  mi.putImageData(im,0,0);
}
function drawMap(){
  if(!own)return;
  const key=S.nat.map(n=>n.st[0]+(n.pact?1:0)+(n.owner||'')).join('')+'|'+selNat;
  if(key!==mapImgKey){mapImgKey=key;buildMapImg();}
  const r=mapCv.getBoundingClientRect();if(r.width<10)return;
  const dpr=Math.min(window.devicePixelRatio||1,2),w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);
  if(mapCv.width!==w||mapCv.height!==h){mapCv.width=w;mapCv.height=h;}
  const sw=MW/MZ.z,sh=MH/MZ.z;clampMZ();
  const c=mctx;c.setTransform(1,0,0,1,0,0);c.fillStyle=PAPER;c.fillRect(0,0,w,h);c.imageSmoothingEnabled=MZ.z<2;c.drawImage(mapImg,MZ.x,MZ.y,sw,sh,0,0,w,h);
  c.setTransform(w/sw,0,0,h/sh,-MZ.x*w/sw,-MZ.y*h/sh);
  const sc=sw/r.width;c.textAlign='center';c.lineJoin='round';
  for(let k=0;k<cent.length;k++){const [x,y,a]=cent[k];
    if(k===0){c.font=`${12*sc}px ${FD}`;c.lineWidth=3*sc;c.strokeStyle=PAPER;c.fillStyle=INK;const hl=(S.island||0)?__L("上陸地"):__L("自国");c.strokeText(hl,x,y+4*sc);c.fillText(hl,x,y+4*sc);continue;}
    const i=k-1,n=S.nat[i],v=n.st==='vassal';if(n.st==='absorbed')continue;
    // 小さい国の名前は、拡大するか選んだときだけ出す（重なりを防ぐ）
    if(Math.sqrt(a)*MZ.z<38&&i!==selNat&&!NATIONS[i].boss)continue;
    const fs=clamp(Math.sqrt(a)*MZ.z/7,8,12)*sc;
    let nm=(NATIONS[i].boss?'★':'')+NATIONS[i].name;if(nm.length>5)nm=nm.replace(/^(★?)(砂漠の大国|鉄の帝国|Desert Realm of |Iron Empire of )/,'$1');
    c.font=`700 ${fs}px 'Zen Kaku Gothic New',sans-serif`;c.lineWidth=3*sc;
    c.strokeStyle=v?INK:PAPER;c.fillStyle=v?PAPER:INK;c.strokeText(nm,x,y);c.fillText(nm,x,y);
    c.font=`${fs*0.9}px ${FN}`;const sub=v?__L("属国"):fmt(n.power);c.strokeText(sub,x,y+fs*1.1);c.fillText(sub,x,y+fs*1.1);
  }
  mapDirty=false;
}
const MZ={z:1,x:0,y:0};
function clampMZ(){MZ.z=clamp(MZ.z,1,4);MZ.x=clamp(MZ.x,0,MW-MW/MZ.z);MZ.y=clamp(MZ.y,0,MH-MH/MZ.z);}
function zoomAt(f,cx,cy){const r=mapCv.getBoundingClientRect(),mx=MZ.x+(cx/r.width)*(MW/MZ.z),my=MZ.y+(cy/r.height)*(MH/MZ.z);MZ.z=clamp(MZ.z*f,1,4);MZ.x=mx-(cx/r.width)*(MW/MZ.z);MZ.y=my-(cy/r.height)*(MH/MZ.z);clampMZ();mapDirty=true;drawMap();}
$('#mzIn').addEventListener('click',()=>{const r=mapCv.getBoundingClientRect();zoomAt(1.5,r.width/2,r.height/2);});
$('#mzOut').addEventListener('click',()=>{const r=mapCv.getBoundingClientRect();zoomAt(1/1.5,r.width/2,r.height/2);});
$('#mzAll').addEventListener('click',()=>{MZ.z=1;MZ.x=0;MZ.y=0;mapDirty=true;drawMap();});
mapCv.addEventListener('wheel',e=>{e.preventDefault();const r=mapCv.getBoundingClientRect();zoomAt(e.deltaY<0?1.25:0.8,e.clientX-r.left,e.clientY-r.top);},{passive:false});
let drag=null,dragMoved=false;
mapCv.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY,mx:MZ.x,my:MZ.y};dragMoved=false;});
window.addEventListener('pointermove',e=>{if(!drag||MZ.z<=1)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5)dragMoved=true;if(!dragMoved)return;
  const r=mapCv.getBoundingClientRect();MZ.x=drag.mx-dx/r.width*(MW/MZ.z);MZ.y=drag.my-dy/r.height*(MH/MZ.z);clampMZ();mapDirty=true;drawMap();});
window.addEventListener('pointerup',()=>{drag=null;});
mapCv.style.touchAction='none';
mapCv.addEventListener('click',e=>{if(!own||dragMoved)return;const r=mapCv.getBoundingClientRect();const x=Math.floor(MZ.x+(e.clientX-r.left)/r.width*(MW/MZ.z)),y=Math.floor(MZ.y+(e.clientY-r.top)/r.height*(MH/MZ.z));
  if(x<0||y<0||x>=MW||y>=MH)return;
  let o=own[y*MW+x];if(o<1){let bd=900;o=-1;for(let k=1;k<cent.length;k++){const d=(cent[k][0]-x)**2+(cent[k][1]-y)**2;if(d<bd){bd=d;o=k;}}}
  if(o>=1){selNat=dispOf(o)-1;mapDirty=true;TUTEV.map=true;renderAll();
    // 選んだ国の情報が画面の下に隠れているときは、地図が見える程度に少しだけ送る
    const c=$('#nationCard'),r=c.getBoundingClientRect(),lim=innerHeight*0.7;
    if(r.top>lim){let sp=c.parentElement;while(sp&&sp!==document.body){const o=getComputedStyle(sp).overflowY;if((o==='auto'||o==='scroll')&&sp.scrollHeight>sp.clientHeight)break;sp=sp.parentElement;}
      (sp&&sp!==document.body?sp:window).scrollBy({top:r.top-lim,behavior:'smooth'});}}});
new ResizeObserver(()=>{mapDirty=true;if(activeTab==='dip')drawMap();}).observe(mapCv);
setTimeout(()=>{genMap();$('#mapWait').hidden=true;selNat=Math.max(0,S.nat.findIndex(n=>n.st!=='vassal'));mapDirty=true;renderAll();},60);

/* ---------- UI 構築 ---------- */
const T=(el,v)=>{if(el._t!==v){el._t=v;el.textContent=v;}};
const D=(el,v)=>{if(el._d!==v){el._d=v;el.disabled=v;}};
const C=(el,c,v)=>{const k='_c'+c;if(el[k]!==v){el[k]=v;el.classList.toggle(c,v);}};
const Hd=(el,v)=>{if(el._h!==v){el._h=v;el.hidden=v;}};
const A=(el,a,v)=>{const k='_a'+a;if(el[k]!==v){el[k]=v;el.setAttribute(a,v);}};


const bEls={},uEls={};
function makeRow(host,def,kind){
  const row=document.createElement('div');row.className='row';
  row.innerHTML=`<div><div class="nm">${def.name}<b></b></div><div class="ds">${def.desc}</div></div><button class="b"><span>${kind==='b'?__L("建てる"):__L("改良する")}</span><small></small></button>`;
  host.appendChild(row);const btn=row.querySelector('button');
  btn.addEventListener('click',()=>{
    if(kind==='b'){const c=bCost(def);if(S.gold<c)return;S.gold-=c;S.b[def.id]++;dirty=true;if(def.id==='wall')S.hp+=200;if(S.b[def.id]===1)log(__LT("{0}を建てた。",[def.name]));}
    else{const c=uCost(def);if(S.gold<c||S.u[def.id]>=def.max)return;S.gold-=c;S.u[def.id]++;log(__LT("{0}を施行（Lv{1}）。",[def.name,S.u[def.id]]));}
    sfx('build');renderAll();});
  return {cnt:row.querySelector('.nm b'),btn,cost:row.querySelector('small'),lbl:row.querySelector('button span')};
}
BUILD.forEach(b=>bEls[b.id]=makeRow($('#builds'),b,'b'));
CAMP.forEach(b=>bEls[b.id]=makeRow($('#camps'),b,'b'));
UPG.forEach(u=>uEls[u.id]=makeRow($('#upgs'),u,'u'));

const tbl=$('#armyTbl');
tbl.innerHTML=__LT("<thead><tr><th>兵種</th>{0}<th>計</th></tr></thead><tbody>{1}<tr class=\"tot\"><td>計</td>{2}<td data-all>0</td></tr></tbody>",[RANKS.map((r,i)=>`<th data-r="${i}">${r.name}<br><small>×${r.m}</small></th>`).join(''),TYPES.map((t,ti)=>`<tr><td>${t.name}</td>${RANKS.map((r,i)=>`<td data-c="${ti}-${i}">0</td>`).join('')}<td data-s="${ti}">0</td></tr>`).join(''),RANKS.map((r,i)=>`<td data-rt="${i}">0</td>`).join('')]);
const tCells=TYPES.map((t,ti)=>RANKS.map((r,i)=>tbl.querySelector(`[data-c="${ti}-${i}"]`)));
const tSum=TYPES.map((t,ti)=>tbl.querySelector(`[data-s="${ti}"]`)),rSum=RANKS.map((r,i)=>tbl.querySelector(`[data-rt="${i}"]`)),allSum=tbl.querySelector('[data-all]');
const rHead=RANKS.map((r,i)=>tbl.querySelector(`th[data-r="${i}"]`));
const rankBtns=RANKS.map((r,i)=>{const b=document.createElement('button');b.className='b';b.innerHTML=`${r.name}<small>0</small>`;b.addEventListener('click',()=>{selRank=i;renderAll();});$('#rankSeg').appendChild(b);return b;});
const amtBtns=AMTS.map(([v,l])=>{const b=document.createElement('button');b.className='b';b.textContent=l;b.addEventListener('click',()=>{selAmt=v;renderAll();});$('#amtSeg').appendChild(b);return b;});
const uRows=TYPES.map((t,ti)=>{
  const row=document.createElement('div');row.className='urow';
  row.innerHTML=__LT("<div class=\"nm\">{0}<span class=\"ds\">{1}・戦力{2}</span></div><div class=\"ct\">0</div>\n  <button class=\"b solid\" data-x=\"t\">訓練<small></small></button>",[t.name,t.note,t.base]);
  $('#urows').appendChild(row);
  const o={ct:row.querySelector('.ct'),tr:row.querySelector('[data-x="t"]')};o.trs=o.tr.querySelector('small');
  o.tr.addEventListener('click',()=>train(ti));
  return o;
});

// 戦いの操作バー
const SPDS=[1,2,4],ORDS=[['adv',__L("前進")],['hold',__L("門の前で守る")],['siege',__L("拠点を狙う")]];
const spdBtns=SPDS.map(v=>{const b=document.createElement('button');b.className='b';b.type='button';b.textContent='×'+v;b.addEventListener('click',()=>{S.opt.spd=v;renderAll();});$('#spdSeg').appendChild(b);return b;});
const ordBtns=ORDS.map(([v,l])=>{const b=document.createElement('button');b.className='b';b.type='button';b.textContent=l;b.addEventListener('click',()=>{if(VIEW&&!VIEW.result){VIEW.order=v;renderAll();}});$('#ordSeg').appendChild(b);return b;});
$('#bowBtn').addEventListener('click',()=>{if(VIEW&&!VIEW.result){VIEW.bowBack=!VIEW.bowBack;renderAll();}});
$('#kingBtn').addEventListener('click',sendKing);
$('#fullBtn').addEventListener('click',()=>{document.body.classList.toggle('full');A($('#fullBtn'),'aria-pressed',String(document.body.classList.contains('full')));setTimeout(resize,30);});
function drawOrd(){}// 出撃の順番は廃止（どの兵種も満遍なく一人ずつ出る）
const guardBtns=GUARD_AMT.map(n=>{const b=document.createElement('button');b.className='b';b.type='button';b.innerHTML=__LT("近衛兵 ×{0}<small></small>",[n]);
  b.addEventListener('click',()=>{const room=GUARD_QMAX-S.gq;if(room<1){banner(__LT("育成の順番待ちは{0}人まで",[GUARD_QMAX]));return;}
    const k=Math.min(n,room,Math.floor(S.gold/GUARD_G),Math.floor(S.food/GUARD_F));if(k<1)return;
    S.gold-=k*GUARD_G;S.food-=k*GUARD_F;S.gq+=k;sfx('tap');renderAll();});
  $('#guardSeg').appendChild(b);return b;});
$('#gqCancel').addEventListener('click',()=>{if(S.gq<1)return;const n=S.gq;S.gold+=n*GUARD_G;S.food+=n*GUARD_F;S.gq=0;S.gt=0;log(__LT("近衛兵{0}人の育成をやめ、金と食料を戻した。",[n]),'','home');renderAll();});
$('#autoBgBtn').addEventListener('click',()=>{S.opt.autoBg=!S.opt.autoBg;renderAll();});
// 研究
const resEls=RESEARCH.map(r=>{const row=document.createElement('div');row.className='row';
  row.innerHTML=__LT("<div><div class=\"nm\">{0}</div><div class=\"ds\">{1}</div></div><button class=\"b\" type=\"button\"><span>研究する</span><small></small></button>",[r.name,r.desc]);
  $('#resList').appendChild(row);const btn=row.querySelector('button');
  btn.addEventListener('click',()=>{if(has(r.id)||S.resq||S.gold<r.cost||(r.pre&&!has(r.pre)))return;S.gold-=r.cost;S.resq={id:r.id,end:S.t+r.time};log(__LT("研究「{0}」を始めた（{1}秒）。",[r.name,r.time]),'','home');renderAll();});
  return {r,btn,lbl:btn.querySelector('span'),sm:btn.querySelector('small')};});
// 傭兵
const mercCost=t=>Math.ceil((TYPES[t].cost*3+6)*(has('merc1')?0.7:1));
const mercBtns=TYPES.map((t,i)=>{const b=document.createElement('button');b.className='b';b.type='button';b.innerHTML=`${t.name}×10<small></small>`;
  b.addEventListener('click',()=>{const c=mercCost(i)*10;if(S.gold<c)return;S.gold-=c;S.army[i][1]+=10;S.stats.merc+=10;floaters.push({x:W*0.5,y:H*0.5,t:0,text:__LT("傭兵 {0}+10",[t.name])});dirty=true;renderAll();});
  $('#mercSeg').appendChild(b);return b;});

// 説明の吹き出し
{const tip=$('#tip');document.querySelectorAll('[data-tip]').forEach(el=>{
  const show=()=>{tip.textContent=el.dataset.tip;tip.hidden=false;const r=el.getBoundingClientRect();tip.style.left=Math.max(8,Math.min(innerWidth-270,r.left))+'px';tip.style.top=(r.bottom+6)+'px';};
  el.addEventListener('mouseenter',show);el.addEventListener('mouseleave',()=>tip.hidden=true);el.addEventListener('click',()=>{if(tip.hidden)show();else tip.hidden=true;});});}
let logF='all';
const LOGF=[['all',__L("すべて")],['war',__L("戦い")],['dip',__L("外交")],['home',__L("内政")]];
const logBtns=LOGF.map(([v,l])=>{const b=document.createElement('button');b.className='b';b.type='button';b.textContent=l;b.addEventListener('click',()=>{logF=v;logDirty=true;renderAll();});$('#logSeg').appendChild(b);return b;});
const diffBtns=DIFF.map((d,k)=>{const b=document.createElement('button');b.className='b';b.type='button';b.textContent=d.name;b.addEventListener('click',()=>{S.opt.diff=k;renderAll();});$('#diffSeg').appendChild(b);return b;});
$('#sfxRange').addEventListener('input',e=>{S.opt.sfx=+e.target.value/100;setVol();});
$('#bgmRange').addEventListener('input',e=>{S.opt.bgm=+e.target.value/100;setVol();});
$('#muteBtn').addEventListener('click',()=>{S.opt.mute=!S.opt.mute;setVol();renderAll();});
const achEls=ACH.map(a=>{const d=document.createElement('div');d.innerHTML=`<b>${a.name}</b>${a.desc}`;$('#achList').appendChild(d);return d;});
const STATN=[['kills',__L("倒した敵兵")],['lost',__L("失った兵")],['atkWins',__L("侵攻の勝ち")],['atkLoss',__L("侵攻の負け")],['defWins',__L("防衛の勝ち")],['defLoss',__L("防衛の負け")],['coalWins',__L("連合軍に勝った")],['maxWin',__L("最大の勝利（敵の人数）")],['merc',__L("雇った傭兵")],['rebels',__L("起きた反乱")],['absorbed',__L("他国どうしの併合")],['isles',__L("統一した島")]];
const statEls=STATN.map(([k,l])=>{const d=document.createElement('div');d.innerHTML=`<dt>${l}</dt><dd>0</dd>`;$('#statList').appendChild(d);return d.querySelector('dd');});
// セーブの書き出し・読み込み（文字列。日本語を含むので UTF-8 として base64 にする）
const enc=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o)))),dec=t=>JSON.parse(decodeURIComponent(escape(atob(String(t).replace(/[^A-Za-z0-9+/=_-]/g,'').replace(/-/g,'+').replace(/_/g,'/')))));
$('#expBtn').addEventListener('click',()=>{S.bn=BATTLES.length;$('#saveTxt').value=enc(S);$('#saveNote').textContent=__LT("書き出した（{0}文字）。「コピー」で写して、別の端末で貼りつける。",[$('#saveTxt').value.length]);});
$('#cpyBtn').addEventListener('click',()=>{const t=$('#saveTxt');if(!t.value)t.value=enc(S);
  const ok=()=>{$('#saveNote').textContent=__L("コピーした。");},ng=()=>{t.select();$('#saveNote').textContent=__L("自動でコピーできなかった。選ばれた文字を手でコピーしてください。");};
  try{navigator.clipboard.writeText(t.value).then(ok,ng);}catch(e){ng();}});
$('#impBtn').addEventListener('click',()=>{let o=null;try{o=dec($('#saveTxt').value);}catch(e){o=null;}
  if(!o||!o.nat||!o.army){$('#saveNote').textContent=__L("読み込めなかった。書き出した文字列を、全部そのまま貼りつけてください。");return;}
  try{o.bn=0;localStorage.setItem(SAVE_KEY,JSON.stringify(o));}catch(e){$('#saveNote').textContent=__L("このブラウザでは保存できなかった（プライベートモードなど）。");return;}
  NOSAVE=true;$('#saveNote').textContent=__L("読み込んだ。画面を読み込み直します…");setTimeout(()=>location.reload(),600);});
// 王朝を次の代へ（研究・実績・統計・設定は引き継ぐ）
$('#genBtn').addEventListener('click',()=>{const b=$('#genBtn');if((S.island||0)<2)return;
  if(b.dataset.arm!=='1'){b.dataset.arm='1';b.textContent=__L("もう一度押すと次の代へ（島は最初から）");setTimeout(()=>{b.dataset.arm='';b.textContent=__L("王朝を次の代へ");},3000);return;}
  const keep={res:S.res,ach:S.ach,stats:S.stats,opt:S.opt,gen:(S.gen||0)+1};
  closeWar();B=null;BATTLES=[];VIEW=null;NATIONS=makeNations(0);NN=NATIONS.length;S=newState();Object.assign(S,keep);
  buildConq();own=null;setTimeout(()=>{genMap();mapImgKey='';mapDirty=true;renderAll();},60);walkers=[];
  log(__LT("王朝は第{0}代に引き継がれた。先代の学問は残り、兵はみな少し強くなった。",[S.gen+1]),'big','home');save();mapDirty=true;dirty=true;formKey='';bgKey='';drawOrd();renderAll();});
const TAXES=[__L("軽い"),__L("ふつう"),__L("重い")];
const taxBtns=TAXES.map((l,k)=>{const b=document.createElement('button');b.className='b';b.type='button';b.textContent=l;b.addEventListener('click',()=>{S.opt.tax=k;renderAll();});$('#taxSeg').appendChild(b);return b;});
const conqHost=$('#conq');let conqIs=[];
function buildConq(){conqHost.innerHTML='';conqHost.style.gridTemplateColumns=`repeat(${Math.ceil(NN/(NN>24?2:1))},minmax(0,1fr))`;
  conqIs=NATIONS.map(()=>{const i=document.createElement('i');conqHost.appendChild(i);return i;});
  const t=$('#conqTitle');if(t)t.firstChild.textContent=__LT("征服 {0}",[islandName(S.island||0)]);}
buildConq();
const card=$('#nationCard');
card.innerHTML=__LT("<article class=\"nation\"><div class=\"n-head\"><div><div class=\"n-size\" data-r=\"size\"></div><h4 data-r=\"name\"></h4></div><span class=\"n-st\" data-r=\"st\"></span></div>\n  <p class=\"n-desc\" data-r=\"desc\"></p>\n  <dl class=\"n-stats\"><div><dt>兵力</dt><dd data-r=\"pw\"></dd></div><div><dt>主力</dt><dd data-r=\"main\"></dd></div><div><dt>勝率</dt><dd data-r=\"ch\"></dd></div><div><dt>関係</dt><dd data-r=\"rl\"></dd></div></dl>\n  <p class=\"note\" data-r=\"eta\"></p>\n  <div class=\"relbar\"><i data-r=\"rb\"></i></div>\n  <div class=\"n-acts\" data-r=\"acts\">\n    <button class=\"b\" data-a=\"food\">食料10を売る<small data-r=\"fp\"></small></button>\n    <button class=\"b\" data-a=\"food100\">食料100を売る<small data-r=\"fp2\"></small></button>\n    <button class=\"b\" data-a=\"pact\"><span data-r=\"pn\"></span><small data-r=\"pc\"></small></button>\n    <button class=\"b\" data-a=\"truce\"><span data-r=\"tn\">和平条約を結ぶ</span><small data-r=\"tc\"></small></button>\n    <div class=\"fracrow\"><label class=\"lbl\" for=\"atkRange\">出陣させる兵</label><input type=\"range\" class=\"vol\" id=\"atkRange\" min=\"1\" max=\"100\" step=\"1\" value=\"100\" data-r=\"frac\"><span class=\"pct\" data-r=\"fracPct\">100%</span><span class=\"note\" data-r=\"avail\"></span></div>\n    <button class=\"b solid\" data-a=\"war\">侵攻する<small data-r=\"wr\"></small></button>\n  </div>\n  <p class=\"n-vassal\" data-r=\"vs\" hidden></p>\n  <div class=\"n-acts\" data-r=\"vacts\" hidden><button class=\"b\" data-a=\"gift\">褒美を与える<small data-r=\"gc\"></small></button><button class=\"b\" data-a=\"leave\">次の島へ渡る<small>島の主を討ったので渡れる</small></button></div></article>",[]);
const NC={el:card.firstElementChild,btn:{}};card.querySelectorAll('[data-r]').forEach(x=>NC[x.dataset.r]=x);card.querySelectorAll('[data-a]').forEach(b=>NC.btn[b.dataset.a]=b);
NC.frac.addEventListener('input',()=>{selFrac=(+NC.frac.value)/100;renderAll();});
card.addEventListener('click',e=>{const b=e.target.closest('button[data-a]');if(!b||b.disabled)return;const a=b.dataset.a,i=selNat;
  if(a==='food'||a==='food100')trade(i,a);else if(a==='pact')pact(i);else if(a==='war')attack(i);
  else if(a==='truce'){const n=S.nat[i],c=truceCost(i);if(n.st!=='free'||n.rel<0||S.gold<c||n.truce>S.t)return;S.gold-=c;n.truce=S.t+TRUCE_SEC;n.rel=clamp(n.rel+5,-100,100);
    log(__LT("{0}と和平条約を結んだ。{1}分間はお互いに攻めない。",[NATIONS[i].name,TRUCE_SEC/60]),'big','dip');renderAll();}
  else if(a==='gift'){const n=S.nat[i],c=giftCost(i);if(n.st!=='vassal'||S.gold<c)return;S.gold-=c;n.loy=clamp(n.loy+20,0,100);log(__LT("属国の{0}に褒美を与えた（忠誠 {1}）。",[NATIONS[i].name,Math.round(n.loy)]),'','dip');renderAll();}
  else if(a==='leave'){if(!S.stats.boss||!bossDown())return;S.ended=true;checkEndForce();}});

document.querySelectorAll('.tabs button').forEach(b=>b.addEventListener('click',()=>{
  activeTab=b.dataset.tab;document.querySelectorAll('.tabs button').forEach(x=>x.setAttribute('aria-selected',x===b));
  ['home','army','dip','log'].forEach(k=>$('#tab-'+k).hidden=k!==activeTab);
  if(activeTab==='log')unread=0;if(activeTab==='dip')mapDirty=true;renderAll();
}));
function restart(){closeWar();B=null;BATTLES=[];VIEW=null;NATIONS=makeNations(0);NN=NATIONS.length;S=newState();buildConq();own=null;setTimeout(()=>{genMap();mapImgKey='';mapDirty=true;renderAll();},60);B=null;walkers=[];log(__L("新しい国をおこした。"),'big');save();mapDirty=true;dirty=true;formKey='';renderAll();}
let resetArm=0;
$('#resetBtn').addEventListener('click',()=>{const b=$('#resetBtn');
  if(Date.now()-resetArm<3000){restart();b.textContent=__L("最初からやり直す");resetArm=0;return;}
  resetArm=Date.now();b.textContent=__L("もう一度押すと消去されます");setTimeout(()=>{if(Date.now()-resetArm>=2900)b.textContent=__L("最初からやり直す")},3000);});
$('#againBtn').addEventListener('click',()=>{$('#end').hidden=true;nextIsland();});

/* ---------- 表示更新 ---------- */
const R={};['goalTxt','day','v-sol','r-sol','v-food','r-food','c-food','v-gold','r-gold','v-wall','r-wall','c-wall','v-pow','r-pow','hint','act-farm-s','conqTxt','logBadge','log','logCount','armyTot','hpTxt','hpFill','raidBox','warChip','warChipTxt','retreatBtn','hud','ehud','ehpTxt','ehpFill'].forEach(id=>R[id]=document.getElementById(id));
let raidTxt='';
let bselKey='';
function drawBsel(){
  const el=$('#bsel');
  if(!BATTLES.length){if(!el.hidden){el.hidden=true;bselKey='';}return;}
  const items=[{v:null,l:__L("本国")}].concat(BATTLES.map(b=>({v:b,l:b.mode==='def'?__L("防衛戦"):b.name,s:b.result?({win:__L("勝"),lose:__L("敗"),retreat:__L("退")})[b.result]:''})));
  const key=items.map(o=>o.l+o.s+(o.v===VIEW?'*':'')).join('|');if(key===bselKey)return;bselKey=key;el.hidden=false;el.innerHTML='';
  items.forEach(o=>{const bt=document.createElement('button');bt.className='b';bt.type='button';bt.setAttribute('aria-pressed',String(o.v===VIEW));
    bt.textContent=o.l;if(o.s){const sm=document.createElement('small');sm.textContent=o.s;bt.appendChild(sm);}
    bt.addEventListener('pointerdown',e=>e.stopPropagation());bt.addEventListener('click',e=>{e.stopPropagation();VIEW=o.v;B=VIEW;formKey='';dirty=true;bselKey='';renderAll();});el.appendChild(bt);});
}
// 次の目標：今の状態から、次にやると良いことを1つ選んで出す
function goal(){
  const tot=Math.floor(total()),vas=S.nat.filter(n=>n.st==='vassal').length;
  if(S.war&&S.war.due===null)return __L("宣戦布告に答える（迎え撃つ・保留・和平金）");
  if(tot<10)return __LT("戦場をタップして兵を10人集める（いま {0}人）",[tot]);
  if(!S.b.farm)return __L("内政タブで農場を建てる（食料が毎秒増える）");
  if(!vas)return __LT("外交タブで{0}に侵攻する",[NATIONS[S.nat.findIndex(n=>n.st==='free')]?.name||__L("独立国")]);
  if(!CAMP.some(c=>S.b[c.id]>0))return __L("内政タブで兵舎を建てる（兵が自動で増える）");
  if(!Object.keys(S.res).length&&!S.resq)return __L("内政タブで研究を始める");
  if(S.nat.some(n=>n.st==='vassal'&&n.loy<25))return __L("忠誠の低い属国に褒美を与える（反乱を防ぐ）");
  const free=S.nat.map((n,i)=>i).filter(i=>S.nat[i].st==='free'&&S.nat[i].truce<=S.t).sort((a,b)=>S.nat[a].power-S.nat[b].power);
  if(free.length){const i=free[0];return __LT("{0}{1}を属国にする（兵力 {2}・残り{3}か国）",[NATIONS[i].name,NATIONS[i].boss?__L("（島の主）"):'',fmt(S.nat[i].power),free.length]);}
  return __L("島を統一する");}
function updateTop(){
  const r=rates();
  T(R.day,__LT("第{0}日",[day()]));
  {const g=goal(),el=R.goalTxt;if(el._g!==g){el._g=g;el.innerHTML=__L("<b>次の目標</b><span></span><em class=\"go\">› 押すと案内</em>");el.children[1].textContent=g;}}
  // 宣戦布告はタブの題名でも知らせる
  {const t=(S.war&&S.war.due===null?__L("【宣戦布告】"):BATTLES.some(b=>b.mode==='def'&&!b.result)?__L("【防衛戦】"):'')+__L("棒の盟主");if(document.title!==t)document.title=t;}
  T(R['v-sol'],fmt(total()));T(R['r-sol'],r.sol>0?fmtR(r.sol):__LT("タップ +{0}",[tapAmt()]));
  T(R['v-food'],fmt(S.food));T(R['r-food'],fmtR(r.food));C(R['c-food'],'warn',r.food<0);
  T(R['v-gold'],fmt(S.gold));T(R['r-gold'],fmtR(r.gold));
  const mh=maxHp();T(R['v-wall'],fmt(S.hp));T(R['r-wall'],__LT("最大 {0}",[fmt(mh)]));C(R['c-wall'],'warn',S.hp<mh*0.3);
  const B=VIEW,nb=BATTLES.length;
  T(R['v-pow'],fmt(myPow()));T(R['r-pow'],nb?__LT("戦闘中 {0}か所・待機 {1}人",[nb,fmt(availTotal())]):__LT("兵種 {0}種",[TYPES.filter((t,i)=>cnt(i)>=1).length]));
  const bar=(el,v,m)=>{const pct=clamp(v/Math.max(1,m)*100,0,100).toFixed(1)+'%';if(el._w!==pct){el._w=pct;el.style.width=pct;}};
  if(B&&B.mode==='atk'){T(R.hpTxt,__LT("野営地 {0} / {1}",[fmt(B.chp),fmt(B.cmax)]));bar(R.hpFill,B.chp,B.cmax);}
  else{T(R.hpTxt,__LT("城壁 {0} / {1}",[fmt(S.hp),fmt(mh)]));bar(R.hpFill,S.hp,mh);}
  Hd(R.ehud,!B);if(B){T(R.ehpTxt,`${B.mode==='def'?__L("敵の野営地"):__L("敵の城壁")} ${fmt(B.ehp)} / ${fmt(B.emax)}`);bar(R.ehpFill,B.ehp,B.emax);}
  Hd(R.hint,S.taps>=8||total()>=10||nb>0);
  if(B){Hd(R.raidBox,false);
    let eL=qMen(B.eq),mL=qMen(B.mq);for(const u of B.en)if(!u.dead&&!u.gone)eL+=u.rep;for(const u of B.me)if(!u.dead&&!u.gone)mL+=u.rep;
    const head=B.mode==='def'?__LT("{0}{1} 来襲",[B.name,B.allies.length?__LT("ほか{0}か国 連合軍",[B.allies.length]):'']):__LT("侵攻 → {0}",[B.name]);
    const sub=B.result?({win:B.mode==='def'?__L("撃退した"):__L("勝利した"),lose:B.mode==='def'?__L("城壁を破られた"):__L("敗れた"),retreat:__L("撤退した")})[B.result]:__LT("味方 {0}人 ／ 敵 {1}人・タップで援軍",[fmt(mL),fmt(eL)]);
    const s=head+'<small>'+sub+'</small>';if(s!==raidTxt){raidTxt=s;R.raidBox.innerHTML=s;}
    Hd(R.retreatBtn,!(B.mode==='atk'&&!B.result));}
  else{Hd(R.raidBox,true);Hd(R.retreatBtn,true);}
  const w=S.war;Hd(R.warChip,!w||w.due===null||!!B);
  drawBsel();
  if(w&&w.due!==null)T(R.warChipTxt,__LT("{0}・あと{1}秒",[NATIONS[w.i].name,Math.max(0,Math.ceil(w.due-S.t))]));
}
function renderAll(){
  updateTop();
  // 戦いの操作バー（戦いがないときは隠す）
  {const anyB=BATTLES.length>0;Hd($('#spdG'),!anyB);Hd($('#ordG'),!anyB);Hd($('#btlG'),!anyB);Hd($('#ctlNote'),anyB);}
  T(hintT,__LT("タップで徴兵：{0}",[TYPES[tapType].name]));
  if(activeTab==='home')FOLDS.forEach(f=>{if(!f.badge)return;let n=0;f.els.forEach(e=>e.querySelectorAll('button').forEach(b=>{if(!b.disabled)n++;}));T(f.badge,n?__LT("できる {0}",[n]):'');Hd(f.badge,!n);});
  spdBtns.forEach((b,k)=>A(b,'aria-pressed',String(SPDS[k]===S.opt.spd)));A($('#autoBgBtn'),'aria-pressed',String(!!S.opt.autoBg));
  {const V=VIEW,on=!!(V&&!V.result);ordBtns.forEach((b,k)=>{A(b,'aria-pressed',String(!!V&&V.order===ORDS[k][0]));D(b,!on);});
    A($('#bowBtn'),'aria-pressed',String(!!V&&V.bowBack));D($('#bowBtn'),!on);
    const kw=S.kingAt>S.t;D($('#kingBtn'),!on||!!(V&&V.king)||kw);T($('#kingS'),kw?__LT("あと{0}秒",[Math.ceil(S.kingAt-S.t)]):V&&V.king?(V.king.dead?__L("倒れた"):__L("出陣中")):'');}
  const rT=rates().solT;
  tBtns.forEach((o,i)=>{A(o.b,'aria-pressed',String(i===tapType));T(o.c,__LT("{0}人",[fmt(cnt(i))])+(rT[i]>0?__LT(" +{0}/秒",[rT[i]<1?rT[i].toFixed(2):rT[i].toFixed(1)]):''));D(o.b,TYPES[i].cost>0&&S.food<TYPES[i].cost);});
  if(activeTab==='home'){
    T(R['act-farm-s'],__LT("食料 +{0}",[fmt(hoeAmt())]));
    T($('#resNow'),S.resq?__LT("研究中：{0}（あと{1}秒）",[RESEARCH.find(x=>x.id===S.resq.id).name,Math.ceil(S.resq.end-S.t)]):__L("金と時間で進める"));
    resEls.forEach(o=>{const r=o.r,done=has(r.id),lock=r.pre&&!has(r.pre),cur=S.resq&&S.resq.id===r.id;
      T(o.lbl,done?__L("完了"):cur?__L("研究中"):lock?__L("まだ"):__L("研究する"));
      T(o.sm,done?'':cur?__LT("あと{0}秒",[Math.ceil(S.resq.end-S.t)]):lock?__LT("先に{0}",[RESEARCH.find(x=>x.id===r.pre).name]):__LT("{0}金・{1}秒",[fmt(r.cost),r.time]));
      D(o.btn,done||!!S.resq||lock||S.gold<r.cost);});
    mercBtns.forEach((b,i)=>{T(b.querySelector('small'),__LT("{0}金",[fmt(mercCost(i)*10)]));D(b,S.gold<mercCost(i)*10);});
    BUILD.concat(CAMP).forEach(b=>{const e=bEls[b.id],c=bCost(b);T(e.cnt,'×'+S.b[b.id]);T(e.cost,fmt(c)+__L("金"));D(e.btn,S.gold<c);});
    UPG.forEach(u=>{const e=uEls[u.id];T(e.cnt,'Lv'+S.u[u.id]);
      if(S.u[u.id]>=u.max){T(e.lbl,__L("最大"));T(e.cost,'—');D(e.btn,true);}
      else{const c=uCost(u);T(e.lbl,__L("改良する"));T(e.cost,fmt(c)+__L("金"));D(e.btn,S.gold<c);}});
  }
  if(activeTab==='army'){
    let all=0;const rs=[0,0,0,0,0];
    TYPES.forEach((t,ti)=>{let s=0;RANKS.forEach((r,ri)=>{const v=Math.floor(S.army[ti][ri]);s+=v;rs[ri]+=v;const el=tCells[ti][ri];T(el,fmt(v));C(el,'z',!v);C(el,'cur',ri===selRank);});T(tSum[ti],fmt(s));all+=s;});
    rs.forEach((v,i)=>{T(rSum[i],fmt(v));C(rSum[i],'cur',i===selRank);C(rHead[i],'cur',i===selRank);});T(allSum,fmt(all));
    T(R.armyTot,__LT("総兵 {0}・戦力 {1}",[fmt(all),fmt(myPow())]));
    {const w=S.wound.reduce((a,r)=>a+r.reduce((x,y)=>x+y,0),0);T($('#woundTxt'),w>=1?__LT("負傷兵 {0}人（少しずつ部隊に戻る）",[fmt(w)]):__L("負傷兵はいない。倒れた兵の一部は負傷兵として戻ってくる。"));}
    {const G=Math.floor(S.guard||0);T($('#guardTxt'),__LT("近衛兵 {0}人。一人の戦力{1}・打たれ強さは槍兵の約2倍で、騎兵に強い。防衛戦では「防衛に出す兵」の割合に関係なく全員が城を守る。侵攻には出ない。",[fmt(G),GUARD_POW]));
      guardBtns.forEach((b,k)=>{const n=GUARD_AMT[k];T(b.querySelector('small'),__LT("{0}金・{1}食・{2}",[fmt(n*GUARD_G),fmt(n*GUARD_F),fmtSec(n*GUARD_SEC)]));D(b,S.gold<GUARD_G||S.food<GUARD_F||S.gq>=GUARD_QMAX);});
      Hd($('#guardQ'),S.gq<1);
      if(S.gq>=1){const left=(S.gq-1)*GUARD_SEC+(GUARD_SEC-S.gt);T($('#gqTxt'),__LT("育成中 {0}人（全員そろうまで {1}）",[fmt(S.gq),fmtSec(left)]));$('#gqFill').style.width=`${Math.round(S.gt/GUARD_SEC*100)}%`;}}
    rankBtns.forEach((b,i)=>{A(b,'aria-pressed',String(i===selRank));T(b.querySelector('small'),fmt(rs[i]));});
    amtBtns.forEach((b,i)=>A(b,'aria-pressed',String(AMTS[i][0]===selAmt)));
    uRows.forEach((o,ti)=>{const c=Math.floor(S.army[ti][selRank]);T(o.ct,fmt(c));
      if(selRank>=4){T(o.trs,__L("最上位"));D(o.tr,true);}
      else{T(o.trs,__LT("{0}金+{1}食",[trainG(selRank),trainF(selRank)]));D(o.tr,c<1||S.gold<trainG(selRank)||S.food<trainF(selRank));}});
  }
  let cq=0;S.nat.forEach((n,i)=>{const v=n.st==='vassal'||(n.st==='absorbed'&&S.nat[n.owner].st==='vassal');if(v)cq++;if(conqIs[i])C(conqIs[i],'on',v);});
  T(R.conqTxt,`${cq} / ${NN}`);
  if(activeTab==='dip'){
    if(mapDirty)drawMap();
    taxBtns.forEach((b,k)=>A(b,'aria-pressed',String(k===S.opt.tax)));
    T($('#traitTxt'),__LT("この島の特色：{0} — {1}",[trait().name,trait().desc]));
    const i=selNat,n=S.nat[i],d=NATIONS[i],v=n.st==='vassal';
    C(NC.el,'vassal',v);T(NC.size,d.size+(d.boss?__L("・島の主"):''));T(NC.name,d.name);T(NC.desc,__LT("{0}　性格：{1}（{2}）",[d.desc,PERS[d.per].name,PERS[d.per].desc]));
    T(NC.st,v?__L("属国"):n.st==='absorbed'?__L("併合"):n.pact?__L("協定"):n.truce>S.t?__L("和平中"):__L("独立"));C(NC.st,'on',v);
    T(NC.pw,fmt(n.power));T(NC.main,TYPES[d.main].name);
    {const est=v?null:simEstimate(i);T(NC.ch,v?'—':est?`${Math.round(est.p*100)}%`:'…');T(NC.eta,v||!est?'':est.p>0?__LT("試算 {0}回・勝つときは約{1}分で決着",[est.runs,Math.max(1,Math.round(est.t/60))]):__LT("試算 {0}回・この兵では勝てない見込み",[est.runs]));}
    T(NC.rl,(n.rel>0?'+':'')+Math.round(n.rel));
    const rl=clamp(Math.round(n.rel),-100,100),L=(rl>=0?50:50+rl/2)+'%',Wd=Math.abs(rl)/2+'%';
    if(NC.rb._l!==L+Wd){NC.rb._l=L+Wd;NC.rb.style.left=L;NC.rb.style.width=Wd;}
    const ab=n.st==='absorbed';Hd(NC.acts,v||ab);Hd(NC.vs,!v&&!ab);Hd(NC.vacts,!v);
    if(ab)T(NC.vs,__LT("{0}に併合された。{1}を従えれば、この国も属国になる。",[NATIONS[n.owner].name,NATIONS[n.owner].name]));
    else if(v){T(NC.vs,__LT("朝貢 毎秒 +{0}金・+{1}食料・忠誠 {2}{3}",[(wealth(i)/200*[0.5,1,1.5][S.opt.tax]).toFixed(1),(wealth(i)/200*[0.5,1,1.5][S.opt.tax]*TRIB_F).toFixed(1),Math.round(n.loy),n.loy<25?__L("（反乱のおそれ）"):'']));
      T(NC.gc,__LT("{0}金・忠誠+20",[fmt(giftCost(i))]));D(NC.btn.gift,S.gold<giftCost(i));Hd(NC.btn.leave,!bossDown());}
    else{
      T(NC.fp,__LT("+{0}金",[fmt(price(i,'food')*10)]));T(NC.fp2,__LT("+{0}金",[fmt(price(i,'food')*100)]));
      D(NC.btn.food,S.food<10);D(NC.btn.food100,S.food<100);
      if(n.pact){T(NC.pn,__L("協定中"));T(NC.pc,__LT("+{0}/秒",[(wealth(i)/500).toFixed(1)]));D(NC.btn.pact,true);}
      else{T(NC.pn,__L("協定を結ぶ"));T(NC.pc,n.rel<20?__L("関係+20で可"):__LT("{0}金",[fmt(pactCost(i))]));D(NC.btn.pact,n.rel<20||S.gold<pactCost(i));}
      {const v=Math.round(selFrac*100);if(+NC.frac.value!==v)NC.frac.value=v;NC.frac.style.setProperty('--p',((v-1)/99*100)+'%');T(NC.fracPct,v+'%');}
      const av=availTotal(),send=Math.max(av>0?1:0,Math.floor(av*selFrac)),nAtk=BATTLES.filter(x=>x.mode==='atk').length;
      T(NC.avail,__LT("出陣できる兵 {0}人 → {1}人を送る（同時の侵攻 {2}/{3}）",[fmt(av),fmt(send),nAtk,MAX_ATK]));
      const tr=n.truce>S.t;T(NC.tn,tr?__L("和平条約中"):__L("和平条約を結ぶ"));T(NC.tc,tr?__LT("あと{0}秒",[Math.ceil(n.truce-S.t)]):n.rel<0?__L("関係0以上で可"):__LT("{0}金・{1}分",[fmt(truceCost(i)),TRUCE_SEC/60]));D(NC.btn.truce,tr||n.rel<0||S.gold<truceCost(i));
      D(NC.btn.war,atkOn(i)||n.pact||tr||send<1||nAtk>=MAX_ATK);
      T(NC.wr,tr?__L("和平条約中は不可"):n.pact?__L("協定中は不可"):atkOn(i)?__L("この国と戦闘中"):nAtk>=MAX_ATK?__L("同時侵攻の上限"):send<1?__L("出陣できる兵がいない"):__LT("相手は{0}主体",[TYPES[d.main].name]));
    }
  }
  T(R.logBadge,unread?`(${unread>99?'99+':unread})`:'');
  // 実績
  let na=0;ACH.forEach((a,k)=>{if(!S.ach[a.id]&&a.ok()){S.ach[a.id]=day();log(__LT("実績「{0}」を達成した。",[a.name]),'big','home');banner(__LT("実績：{0}",[a.name]),2600);sfx('win');}if(S.ach[a.id])na++;});
  if(activeTab==='log'){
    ACH.forEach((a,k)=>C(achEls[k],'on',!!S.ach[a.id]));T($('#achCount'),`${na} / ${ACH.length}`);
    STATN.forEach(([k],j)=>T(statEls[j],fmt(S.stats[k]||0)));
    T($('#goalTxt2'),goal());
    diffBtns.forEach((b,k)=>A(b,'aria-pressed',String(k===S.opt.diff)));logBtns.forEach((b,k)=>A(b,'aria-pressed',String(LOGF[k][0]===logF)));
    {const a=$('#sfxRange'),c=$('#bgmRange');if(document.activeElement!==a){a.value=Math.round(S.opt.sfx*100);a.style.setProperty('--p',a.value+'%');}if(document.activeElement!==c){c.value=Math.round(S.opt.bgm*100);c.style.setProperty('--p',c.value+'%');}}
    T($('#muteBtn'),S.opt.mute?__L("音を出す"):__L("音を消す"));A($('#muteBtn'),'aria-pressed',String(!!S.opt.mute));
    T($('#genTxt'),__LT("第{0}代",[(S.gen||0)+1]));D($('#genBtn'),(S.island||0)<2);}
  if(logDirty&&activeTab==='log'){logDirty=false;
    const L=S.log.filter(l=>logF==='all'||(l.c||guessCat(l.text))===logF);
    R.log.innerHTML=L.map(l=>__LT("<li class=\"{0}\"><span class=\"d\">第{1}日</span><span class=\"t\"></span></li>",[l.k,l.d])).join('');
    R.log.querySelectorAll('.t').forEach((x,i)=>x.textContent=L[i].text);T(R.logCount,L.length+__L("件"));}
}

/* ---------- 忠誠・外交の出来事・他国どうしの戦争 ---------- */
const bossDown=()=>NATIONS.some((d,i)=>d.boss&&S.nat[i].st==='vassal');
function checkEndForce(){const add=NATIONS.reduce((a,d,i)=>a+(S.nat[i].st==='vassal'?wealth(i)/200:0),0)*0.5;S.tribute=(S.tribute||0)+add;S.tributeF=(S.tributeF||0)+add*TRIB_F;S.stats.isles++;
  log(__LT("島の主を討ち、{0}をあとにした。",[islandName(S.island)]),'big','dip');save();showEnd();}
let slowAcc=0;
function slowTick(dt){slowAcc+=dt;if(slowAcc<1)return;const d=slowAcc;slowAcc=0;
  // 属国の忠誠：朝貢の重さで上下し、近くに強い敵がいると下がる。低いと反乱
  const drift=[0.08,0.02,-0.06][S.opt.tax];
  S.nat.forEach((n,i)=>{if(n.st!=='vassal')return;let dl=drift;
    if(ADJ&&[...ADJ[i]].some(j=>S.nat[j].st==='free'&&S.nat[j].rel<0&&S.nat[j].power>S.nat[i].power*3))dl-=0.02;
    n.loy=clamp((n.loy==null?60:n.loy)+dl*d,0,100);
    if(n.loy<15&&Math.random()<0.02*d&&!BATTLES.some(b=>b.i===i)){n.st='free';n.pact=false;n.loy=60;n.rel=-40;n.power=Math.max(n.power,NATIONS[i].power*0.7);S.stats.rebels++;
      log(__LT("属国の{0}が反乱を起こし、独立した。",[NATIONS[i].name]),'warn','dip');banner(__LT("{0}が反乱！",[NATIONS[i].name]),3000);sfx('horn');mapDirty=true;}});
  // 相手から届く外交の出来事
  if(S.t>=(S.nextEv||0)&&$('#evModal').hidden&&$('#warModal').hidden&&$('#end').hidden){S.nextEv=S.t+80+Math.random()*70;makeEvent();}
  // 他国どうしの戦争
  if(ADJ&&S.t>=(S.nextNW||240)){S.nextNW=S.t+(90+Math.random()*80);natWar();}
}
function natWar(){
  const free=i=>S.nat[i].st==='free';
  const atk=S.nat.map((n,i)=>i).filter(i=>free(i)&&[...ADJ[i]].some(j=>free(j)&&!S.nat[j].pact&&S.nat[j].power<S.nat[i].power*1.2));
  if(!atk.length)return;
  const w=atk.map(i=>NATIONS[i].per===0?3:NATIONS[i].per===2?0.3:1),sum=w.reduce((a,b)=>a+b,0);let r=Math.random()*sum,a=atk[0];for(let k=0;k<atk.length;k++){r-=w[k];if(r<=0){a=atk[k];break;}}
  const tg=[...ADJ[a]].filter(j=>free(j)&&!S.nat[j].pact&&S.nat[j].power<S.nat[a].power*1.2&&!BATTLES.some(b=>b.i===j));if(!tg.length)return;
  const b=tg[Math.floor(Math.random()*tg.length)],A=S.nat[a],Bn=S.nat[b];
  if(Math.random()<A.power/(A.power+Bn.power)){Bn.st='absorbed';Bn.owner=a;A.power+=Bn.power*0.5;S.stats.absorbed++;
    // 併合された国の領土を持っていた国も、まとめて持ち主が変わる
    S.nat.forEach(m=>{if(m.st==='absorbed'&&m.owner===b)m.owner=a;});
    if(selNat===b)selNat=a;if(S.war&&(S.war.i===b))S.war.i=a;
    log(__LT("{0}が{1}に攻め込み、併合した。国境が動いた。",[NATIONS[a].name,NATIONS[b].name]),'warn','dip');mapDirty=true;}
  else{A.power*=0.85;Bn.power*=0.92;log(__LT("{0}が{1}に攻め込んだが、退けられた。",[NATIONS[a].name,NATIONS[b].name]),'','dip');}
}
// 外交の出来事（同盟の申し込み・交易の依頼・援軍の要請・和平の提案）
let EV=null;
function makeEvent(){
  const idx=S.nat.map((n,i)=>i),pick=a=>a[Math.floor(Math.random()*a.length)],L=[];
  const al=idx.filter(i=>S.nat[i].st==='free'&&!S.nat[i].pact&&S.nat[i].rel>=5&&NATIONS[i].per!==0&&S.nat[i].truce<=S.t);
  if(al.length)L.push(()=>{const i=pick(al);return {i,title:__L("同盟の申し込み"),text:__LT("{0}の使者が来た。「わが国と協定を結びませんか。費用はいりません」",[NATIONS[i].name]),yes:__L("協定を結ぶ"),no:__L("断る"),
    onYes:()=>{S.nat[i].pact=true;S.nat[i].rel=clamp(S.nat[i].rel+10,-100,100);log(__LT("{0}の申し込みを受け、協定を結んだ。",[NATIONS[i].name]),'big','dip');mapDirty=true;},onNo:()=>{S.nat[i].rel-=5;}};});
  const tr=idx.filter(i=>S.nat[i].st==='free');const amt=Math.max(100,Math.round(S.food*0.25/100)*100);
  if(tr.length&&S.food>=amt)L.push(()=>{const i=pick(tr),g=Math.round(amt*NATIONS[i].foodP*1.8);return {i,title:__L("交易の依頼"),text:__LT("{0}が食料{1}を金{2}で買いたいと言っている（いつもより高い）。",[NATIONS[i].name,fmt(amt),fmt(g)]),yes:__L("売る"),no:__L("断る"),
    onYes:()=>{if(S.food<amt)return;S.food-=amt;S.gold+=g;S.nat[i].rel=clamp(S.nat[i].rel+5,-100,100);log(__LT("{0}に食料{1}を売り、金{2}を得た。",[NATIONS[i].name,fmt(amt),fmt(g)]),'','dip');},onNo:()=>{}};});
  const pal=idx.filter(i=>S.nat[i].st==='vassal'||S.nat[i].pact);
  if(pal.length)L.push(()=>{const i=pick(pal),v=S.nat[i].st==='vassal',g=giftCost(i);return {i,title:__L("援軍の要請"),text:__LT("{0}の{1}が隣国に脅かされ、軍資金{2}金の援助を求めている。",[v?__L("属国"):__L("協定国"),NATIONS[i].name,fmt(g)]),yes:__LT("{0}金を送る",[fmt(g)]),no:__L("断る"),
    onYes:()=>{if(S.gold<g)return;S.gold-=g;if(v)S.nat[i].loy=clamp(S.nat[i].loy+20,0,100);S.nat[i].rel=clamp(S.nat[i].rel+10,-100,100);log(__LT("{0}に軍資金を送った。",[NATIONS[i].name]),'','dip');},
    onNo:()=>{if(v)S.nat[i].loy=clamp(S.nat[i].loy-15,0,100);S.nat[i].rel-=10;log(__LT("{0}の援軍の要請を断った。",[NATIONS[i].name]),'','dip');}};});
  const pc=idx.filter(i=>S.nat[i].st==='free'&&S.nat[i].rel<0&&NATIONS[i].per!==0&&S.nat[i].truce<=S.t&&!(S.war&&S.war.i===i));
  if(pc.length)L.push(()=>{const i=pick(pc);return {i,title:__L("和平の提案"),text:__LT("{0}が和平条約を提案してきた。{1}分間、お互いに攻めないという約束だ。",[NATIONS[i].name,TRUCE_SEC/60]),yes:__L("和平を結ぶ"),no:__L("断る"),
    onYes:()=>{S.nat[i].truce=S.t+TRUCE_SEC;S.nat[i].rel=clamp(S.nat[i].rel+10,-100,100);log(__LT("{0}と和平条約を結んだ。",[NATIONS[i].name]),'big','dip');},onNo:()=>{S.nat[i].rel-=5;}};});
  if(!L.length)return;EV=pick(L)();
  $('#evTitle').textContent=EV.title;$('#evText').textContent=EV.text;$('#evYes').textContent=EV.yes;$('#evNo').textContent=EV.no;$('#evModal').hidden=false;sfx('ev');
}
$('#evYes').addEventListener('click',()=>{if(EV)EV.onYes();EV=null;$('#evModal').hidden=true;renderAll();});
$('#evNo').addEventListener('click',()=>{if(EV)EV.onNo();EV=null;$('#evModal').hidden=true;renderAll();});

/* ---------- v25：見出しの折りたたみ・遊び方・目標への案内・チュートリアル ---------- */
var hintT=$('#hintT');
let foldSt={};try{foldSt=JSON.parse(localStorage.getItem('bou-fold')||'{}')||{};}catch(e){foldSt={};}
var FOLDS=[];
['tab-home','tab-army'].forEach(pid=>{const pane=$('#'+pid);[...pane.querySelectorAll(':scope > h3')].forEach((h,k)=>{
  const els=[];let n=h.nextElementSibling;while(n&&n.tagName!=='H3'){els.push(n);n=n.nextElementSibling;}
  const key=pid+k,f={h,els,key,badge:null};h.classList.add('fold');h.tabIndex=0;h.setAttribute('role','button');
  if(pid==='tab-home'){f.badge=document.createElement('em');f.badge.className='can';f.badge.hidden=true;h.firstChild.after(f.badge);}
  const set=c=>{h.classList.toggle('closed',c);h.setAttribute('aria-expanded',String(!c));els.forEach(e=>e.classList.toggle('folded',c));};
  f.set=set;set(!!foldSt[key]);
  const tog=()=>{const c=!h.classList.contains('closed');set(c);foldSt[key]=c;try{localStorage.setItem('bou-fold',JSON.stringify(foldSt));}catch(e){}};
  h.addEventListener('click',e=>{if(e.target.closest('button'))return;tog();});
  h.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();tog();}});
  FOLDS.push(f);});});
// 折りたたまれた中にある要素なら開く
function unfold(el){for(const f of FOLDS)if(f.els.some(e=>e===el||e.contains(el)))f.set(false);}
const goTab=t=>{if(t&&activeTab!==t)document.querySelector(`.tabs button[data-tab=${t}]`).click();};
function flashEl(el){if(!el)return;unfold(el);el.scrollIntoView({block:'center',behavior:'smooth'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');setTimeout(()=>el.classList.remove('flash'),2000);}
function goalTarget(){const tot=Math.floor(total()),vas=S.nat.filter(n=>n.st==='vassal').length;
  if(S.war&&S.war.due===null)return ['war'];
  if(tot<10)return [null,'#stage'];
  if(!S.b.farm)return ['home','#builds'];
  if(!vas)return ['dip','.mapbox'];
  if(!CAMP.some(c=>S.b[c.id]>0))return ['home','#camps'];
  if(!Object.keys(S.res).length&&!S.resq)return ['home','#resList'];
  return ['dip','.mapbox'];}
R.goalTxt.addEventListener('click',()=>{const [t,sel]=goalTarget();if(t==='war'){openWar();return;}goTab(t);setTimeout(()=>flashEl($(sel)),60);});
R.goalTxt.setAttribute('role','button');R.goalTxt.tabIndex=0;R.goalTxt.addEventListener('keydown',e=>{if(e.key==='Enter'){R.goalTxt.click();}});
// 遊び方
const helpM=$('#helpModal');
$('#helpBtn').addEventListener('click',()=>{helpM.hidden=false;$('#helpClose').focus();});
$('#helpClose').addEventListener('click',()=>{helpM.hidden=true;});
helpM.addEventListener('click',e=>{if(e.target===helpM)helpM.hidden=true;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!helpM.hidden)helpM.hidden=true;});
$('#tutBtn').addEventListener('click',()=>{helpM.hidden=true;S.tut=0;tutGo();});

/* チュートリアル：光った場所を操作すると次へ進む */
var TUTEV={};
const TUT=[
 {t:__L("ようこそ、盟主"),x:__L("あなたは小さな国の盟主。兵を集め、食料と金を増やし、島の国々を従えていく。最初の一歩を順に案内する（2分ほど）。"),btn:__L("はじめる")},
 {sel:'#stage',t:__L("兵を集める"),x:()=>__LT("戦場をタップすると、門から兵が1人出てくる。まず10人集めよう（いま {0}人）。",[Math.floor(total())]),until:()=>total()>=10},
 {tab:'home',sel:'#builds .row',t:__L("農場を建てる"),x:__L("「建てる」を押して農場を建てよう。食料が毎秒増える。食料は兵を作るときに使う。"),until:()=>S.b.farm>=1},
 {sel:'#tbar',t:__L("兵種を選ぶ"),x:__L("ここで作る兵種を選ぶ。歩兵は無料、ほかは食料を使う。槍は騎兵に、騎兵は弓兵に、弓兵は歩兵と槍兵に強い。")},
 {sel:'.res',t:__L("国のようす"),x:__L("兵士・食料・金・城壁・戦力。下の小さな数字は1秒あたりの増え方。数字に指やマウスを置くと説明が出る。")},
 {tab:'dip',sel:'.mapbox',t:__L("国を選ぶ"),x:__L("外交タブの地図で国をタップして選ぶ。まずは自国（斜線）の隣にある、数字（兵力）の小さい国を選ぼう。"),until:()=>TUTEV.map,start:()=>{TUTEV.map=false;}},
 {tab:'dip',sel:'#nationCard',t:__L("侵攻する"),x:__L("勝率を確かめて「侵攻する」を押そう。勝率が低いときは、兵を増やすか別の国を選ぶ。"),until:()=>BATTLES.some(b=>b.mode==='atk')||S.stats.atkWins>0},
 {sel:'#ctl',t:__L("戦いの操作"),x:__L("速さ（×2・×4）と、全軍への指示（前進・守る・拠点を狙う）を選べる。戦場をタップすると援軍を送れる。")},
 {sel:'#stage',t:__L("決着を待つ"),x:__L("右上の敵の城壁を0にすれば勝ち。勝つと属国になり、朝貢で金と食料が入る。負けても兵を増やせば再挑戦できる。"),until:()=>!BATTLES.some(b=>b.mode==='atk'&&!b.result)},
 {tab:'army',sel:'#urows',t:__L("訓練で強くする"),x:__L("金と食料を使って訓練すると、階級が上がり一人ひとりが強くなる。兵種ごとの人数もこのタブで見られる。")},
 {sel:'#goalTxt',t:__L("あとは自由に"),x:__L("迷ったら「次の目標」を押すと、やることの場所へ案内する。ほかの国から宣戦布告が届いたら、迎え撃つか保留しよう。遊び方はいつでも右上の「？ 遊び方」から。"),btn:__L("はじめよう")},
];
const coach=$('#coach'),cRing=$('#cRing'),cBub=$('#cBub');let tutCur=-2;
function tutEnd(msg){S.tut=-1;coach.hidden=true;tutCur=-2;if(msg)banner(msg,2600);save();}
function tutGo(){if(S.tut<0||S.tut>=TUT.length){coach.hidden=true;return;}
  const st=TUT[S.tut];tutCur=S.tut;if(st.start)st.start();goTab(st.tab);coach.hidden=false;
  T($('#cStep'),__LT("チュートリアル {0} / {1}",[S.tut+1,TUT.length]));T($('#cTitle'),st.t);
  $('#cNext').hidden=!!st.until;$('#cNext').textContent=st.btn||__L("次へ");T($('#cWait'),st.until?__L("光っている所を操作しよう"):'');
  const el=st.sel&&$(st.sel);if(el){unfold(el);el.scrollIntoView({block:'center',behavior:'smooth'});}
  tutPlace();if(!st.until)$('#cNext').focus({preventScroll:true});}
function tutPlace(){if(coach.hidden)return;const st=TUT[S.tut];if(!st)return;
  T($('#cText'),typeof st.x==='function'?st.x():st.x);
  const el=st.sel&&$(st.sel),vw=innerWidth,vh=innerHeight,bw=cBub.offsetWidth,bh=cBub.offsetHeight,m=16;
  let r=el&&el.offsetParent!==null?el.getBoundingClientRect():null;
  if(!r||r.width===0){Object.assign(cRing.style,{left:vw/2+'px',top:vh*0.4+'px',width:'0px',height:'0px'});Object.assign(cBub.style,{left:Math.max(m,(vw-bw)/2)+'px',top:Math.max(m,(vh-bh)/2)+'px'});return;}
  const pad=6;const L=Math.max(2,r.left-pad),Tp=Math.max(2,r.top-pad),Wd=Math.min(vw-4,r.right+pad)-L,Ht=Math.min(vh-4,r.bottom+pad)-Tp;
  Object.assign(cRing.style,{left:L+'px',top:Tp+'px',width:Wd+'px',height:Ht+'px'});
  let top;if(r.bottom+pad+12+bh<vh-m)top=r.bottom+pad+12;else if(r.top-pad-12-bh>m)top=r.top-pad-12-bh;else top=vh-bh-m;
  const left=Math.min(Math.max(m,r.left),vw-bw-m);Object.assign(cBub.style,{left:left+'px',top:Math.max(m,top)+'px'});}
const modalOpen=()=>!$('#langModal').hidden||!$('#warModal').hidden||!$('#evModal').hidden||!helpM.hidden||!$('#end').hidden;
function tutTick(){if(S.tut<0||S.ended){if(!coach.hidden)coach.hidden=true;return;}
  // 宣戦布告などの画面が出ている間は、案内をいったん隠す
  if(modalOpen()){if(!coach.hidden){coach.hidden=true;}tutCur=-2;return;}
  if(tutCur!==S.tut){tutGo();return;}
  const st=TUT[S.tut];if(st&&st.until&&st.until()){S.tut++;if(S.tut>=TUT.length)tutEnd(__L("チュートリアル完了"));else{sfx('build');tutGo();}return;}
  tutPlace();}
$('#cNext').addEventListener('click',()=>{S.tut++;if(S.tut>=TUT.length)tutEnd(__L("チュートリアル完了。健闘を祈る、盟主よ"));else tutGo();});
$('#cSkip').addEventListener('click',()=>tutEnd(__L("右上の「？ 遊び方」から、いつでも見られる")));
addEventListener('resize',()=>tutPlace());addEventListener('scroll',()=>tutPlace(),true);

/* ---------- 時間経過 ---------- */
let lastTick=performance.now(),saveAcc=0,uiAcc=0,lastTot=-1;
setInterval(()=>{
  const now=performance.now(),dt=Math.min(1,(now-lastTick)/1000);lastTick=now;
  if(S.ended)return;
  S.t+=dt;const r=rates();
  S.food+=r.food*dt;S.gold+=r.gold*dt;CAMP.forEach((c,i)=>{S.army[c.t][0]+=r.solT[i]*dt;});
  if(S.food<0){S.food=0;if(!S.starving){S.starving=true;log(__L("食料が尽きた。兵舎の徴兵が止まっている。"),'warn');banner(__L("食料が尽きた！ 兵舎が止まっている"));}}
  else if(S.food>5)S.starving=false;
  S.nat.forEach((n,i)=>{if(n.st==='free')n.power+=NATIONS[i].power*0.0004*dt;n.sat*=Math.pow(0.97,dt);});
  // 近衛兵の育成：一人ずつ時間をかけて育つ
  if(S.gq>=1){S.gt+=dt;while(S.gt>=GUARD_SEC&&S.gq>=1){S.gt-=GUARD_SEC;S.gq--;S.guard=(S.guard||0)+1;}
    if(S.gq<1){S.gq=0;S.gt=0;log(__L("近衛兵の育成が終わった。"),'','home');banner(__L("近衛兵がそろった"),2200);sfx('build');}}
  slowTick(dt);
  for(const b of BATTLES.slice()){B=b;const m=b===VIEW?S.opt.spd:(S.opt.autoBg?4:S.opt.spd);for(let k=0;k<m&&BATTLES.includes(b);k++)stepBattle(dt);}B=VIEW;
  // 研究
  if(S.resq&&S.t>=S.resq.end){const r=RESEARCH.find(x=>x.id===S.resq.id);S.res[S.resq.id]=day();S.resq=null;log(__LT("研究「{0}」が終わった。{1}。",[r.name,r.desc]),'big','home');banner(__LT("研究完了：{0}",[r.name]),2600);sfx('win');}
  // 負傷兵は少しずつ復帰する
  {const rate=(has('med1')?0.02:0.012)*dt;for(let t=0;t<5;t++)for(let r=0;r<5;r++){const w=S.wound[t][r];if(w>0.001){const back=Math.max(Math.min(w,0.02),w*rate);S.wound[t][r]-=back;S.army[t][r]+=back;}}}
  if(!defOn())S.hp=Math.min(maxHp(),S.hp+maxHp()*0.015*dt);
  if(!defOn()){if(S.war){const w=S.war;if(w.due!==null&&S.t>=w.due){S.war=null;closeWar();S.nextRaid=S.t+100+Math.random()*60;log(__LT("保留の期限が切れ、{0}が攻めてきた。",[NATIONS[w.i].name]),'warn');startRaid(w.i,w.E,w.allies);}
    else if(w.due===null&&$('#warModal').hidden)openWar();}
  else if(S.t>=S.nextRaid){S.nextRaid=S.t+(100+Math.random()*60)*DIFF[S.opt.diff].raid;trySchedRaid();}}
  const tt=Math.floor(total());if(tt!==lastTot){lastTot=tt;dirty=true;}
  if(S.tut>=0){S.nextRaid=Math.max(S.nextRaid,S.t+45);S.nextEv=Math.max(S.nextEv||0,S.t+45);}
  uiAcc+=dt;if(uiAcc>0.25){uiAcc=0;renderAll();tutTick();}else updateTop();
  saveAcc+=dt;if(saveAcc>5){saveAcc=0;save();}
},100);
document.addEventListener('visibilitychange',()=>{if(document.hidden)save();});
renderAll();if(S.ended)showEnd();
})();
