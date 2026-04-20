const categories = [
  {
    id: "cat-primary",
    key: "一次情報",
    title: "まず最初に当たる一次情報",
    description: "制度、通知、安全性、添付文書の原典を押さえるための土台です。",
    items: [
      {
        name: "厚生労働省",
        url: "https://www.mhlw.go.jp/",
        use: "制度改正、通知、行政方針、薬事・保険関連の原典確認に使います。SNSや二次記事より先にここを見る癖があるかで精度が変わります。",
        tags: ["行政", "制度", "一次情報"]
      },
      {
        name: "PMDA（医薬品医療機器総合機構）",
        url: "https://www.pmda.go.jp/",
        use: "添付文書、安全性情報、RMP、回収情報など医薬品DIの土台になる一次情報源です。迷ったらまずPMDAです。",
        tags: ["PMDA", "添付文書", "安全性"]
      },
      {
        name: "医薬品副作用被害救済制度（PMDA）",
        url: "https://www.pmda.go.jp/relief-services/adr-sufferers/0001.html",
        use: "重篤な副作用が疑われ、患者説明や制度案内が必要なときに確認します。説明責任を曖昧にしないための導線です。",
        tags: ["副作用", "制度", "患者対応"]
      },
      {
        name: "国民健康保険中央会",
        url: "https://www.kokuho.or.jp/",
        use: "国保関連制度や審査支払の全体像を確認したいときに参照します。制度理解の背景整理に役立ちます。",
        tags: ["保険", "制度", "国保"]
      },
      {
        name: "社会保険診療報酬支払基金",
        url: "https://www.ssk.or.jp/",
        use: "レセプト審査、オンライン資格確認、医療保険運用まわりの確認に使います。請求実務の解像度を上げたいときに有用です。",
        tags: ["保険", "請求", "支払基金"]
      }
    ]
  },
  {
    id: "cat-drug-info",
    key: "添付文書",
    title: "添付文書・製品情報をすぐ確認したい",
    description: "日常DIの中心です。まずここが軽く引ける状態にしておくべきです。",
    items: [
      {
        name: "医療用医薬品 添付文書等情報検索（PMDA）",
        url: "https://www.pmda.go.jp/PmdaSearch/iyakuSearch/",
        use: "添付文書、患者向医薬品ガイド、インタビューフォーム周辺情報を最速で引きたいときに使います。日常DIの起点です。",
        tags: ["PMDA", "添付文書", "日常DI"]
      },
      {
        name: "一般用医薬品・要指導医薬品 情報検索（PMDA）",
        url: "https://www.pmda.go.jp/PmdaSearch/otcSearch/",
        use: "OTCの添付文書や使用者向ガイドを確認したいときに使います。セルフメディケーション相談時の根拠固めに便利です。",
        tags: ["OTC", "添付文書", "セルフメディケーション"]
      },
      {
        name: "PMDAおくすりサーチ",
        url: "https://www.pmda.go.jp/okusuri_search/",
        use: "患者さん自身にも案内しやすい一般向け検索です。服用中の薬の概要や副作用注意点を共有したいときに役立ちます。",
        tags: ["患者向け", "PMDA", "薬検索"]
      },
      {
        name: "くすりのしおり",
        url: "https://www.rad-ar.or.jp/siori/",
        use: "患者説明用に、薬の効能・飲み方・注意点を平易な表現で確認したいときに使います。服薬指導の言い換え素材として優秀です。",
        tags: ["患者説明", "服薬指導", "薬検索"]
      },
      {
        name: "RMP提出品目一覧（PMDA）",
        url: "https://www.pmda.go.jp/safety/info-services/drugs/items-information/rmp/0001.html",
        use: "追加の安全対策が必要な薬か、どんな安全性懸念が重視されているかを確認したいときに使います。新薬や注意薬の理解が深まります。",
        tags: ["RMP", "安全性", "新薬"]
      },
      {
        name: "「健康食品」の安全性・有効性情報",
        url: "https://hfnet.nibiohn.go.jp/",
        use: "サプリや健康食品の相談対応で、感覚ではなく根拠で返したいときに使います。相互作用や有効性の見極めに有用です。",
        tags: ["健康食品", "サプリ", "相互作用"]
      },
      {
        name: "効能効果、用法用量等に違いのある後発医薬品リスト",
        url: "https://www.jga.gr.jp/medical/confirm-effective.html",
        use: "先発から後発への切替時に、適応や用法の違いがないか確認したいときに使います。同じ成分だから同じ、という雑な判断を防ぎます。",
        tags: ["後発品", "切替", "適応"]
      },
      {
        name: "化粧品成分オンライン",
        url: "https://cosmetic-ingredients.org/",
        use: "化粧品成分や皮膚刺激性の相談に対応したいときに便利です。OTCやスキンケア相談の補助線として使えます。",
        tags: ["化粧品", "成分", "皮膚"]
      }
    ]
  },
  {
    id: "cat-dosing",
    key: "用量調整",
    title: "用量調整・禁忌判断で迷ったとき",
    description: "腎機能、肝機能、周術期は事故につながりやすいので、見る順番ごと設計しています。",
    items: [
      {
        name: "日本腎臓学会 診療ガイドライン",
        url: "https://jsn.or.jp/medic/guideline/index.php",
        use: "CKDや腎疾患の標準治療・評価の考え方を確認したいときに使います。用量調整の背景理解まで押さえたいとき向けです。",
        tags: ["腎機能", "ガイドライン", "CKD"]
      },
      {
        name: "腎機能低下時に最も注意が必要な薬剤投与量一覧",
        url: "https://jsnp.org/dosage_recommendations/",
        use: "腎機能低下時の投与量を手早く確認したいときの実務ツールです。添付文書だけでは遅い場面で特に強いです。",
        tags: ["腎機能", "投与量", "一覧"]
      },
      {
        name: "日本肝臓学会ガイドライン",
        url: "https://www.jsh.or.jp/medical/guidelines/jsh_guidlines/",
        use: "肝硬変、肝炎、肝癌など肝疾患の標準治療や考え方を確認したいときに使います。肝機能障害時の薬物治療判断の土台になります。",
        tags: ["肝機能", "ガイドライン", "肝疾患"]
      },
      {
        name: "重篤な肝機能障害時に禁忌となる薬剤について",
        url: "https://municipal-hospital.ichinomiya.aichi.jp/medical/druginformation_backnumber.html",
        use: "肝障害患者で、この薬を本当に入れていいかを急ぎで見たいときに便利です。院内DI資料ですが、現場感のある整理がされています。",
        tags: ["肝機能", "禁忌", "院内DI"]
      },
      {
        name: "術前中止薬管理Webアプリ案内",
        url: "https://yakuzai.med.saga-u.ac.jp/info/pharmacy/",
        use: "周術期の休薬確認で迷ったときに参照します。抗血栓薬や糖尿病薬など、事故につながりやすい領域の確認に有用です。",
        tags: ["術前", "休薬", "周術期"]
      }
    ]
  },
  {
    id: "cat-safety",
    key: "安全性",
    title: "供給・安全性・回収情報を追いたい",
    description: "供給不安と安全性改訂は、知らなかったでは済まない領域です。",
    items: [
      {
        name: "医薬品・医療機器等安全性情報（厚生労働省）",
        url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/iyaku/index.html",
        use: "重要な副作用、使用上の注意改訂、最新の安全対策を追いたいときに使います。定点観測していないと現場感覚が古くなります。",
        tags: ["安全性", "副作用", "改訂"]
      },
      {
        name: "医薬品等回収関連情報（厚生労働省）",
        url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kaisyu/index.html",
        use: "自主回収や回収クラス分類を確認したいときに使います。問い合わせ対応や在庫確認時の判断材料になります。",
        tags: ["回収", "安全性", "在庫"]
      },
      {
        name: "DSJP（医療用医薬品供給状況データベース）",
        url: "https://drugshortage.jp/",
        use: "限定出荷、供給停止、代替候補検討の前提情報を素早く確認したいときに使います。供給不安の時代に外せません。",
        tags: ["供給", "限定出荷", "代替薬"]
      },
      {
        name: "CloseDi 供給状況検索",
        url: "https://closedi.jp/medical_supply/",
        use: "供給状況や経過措置期限、選定療養対象まで一気に見たいときに便利です。実務寄りで検索導線が軽いのが強みです。",
        tags: ["供給", "経過措置", "選定療養"]
      }
    ]
  },
  {
    id: "cat-special",
    key: "特殊ケース",
    title: "特殊ケースを確認したい",
    description: "授乳、ドーピング、院外注射、麻薬廃棄は、曖昧な理解のまま進めると危険です。",
    items: [
      {
        name: "授乳中の薬の使用について",
        url: "https://www.ncchd.go.jp/kusuri/news_med/druglist.html",
        use: "授乳中の処方可否や代替の検討で迷ったときに使います。国内の患者相談実績も踏まえた実践的な情報源です。",
        tags: ["授乳", "妊娠", "患者対応"]
      },
      {
        name: "LactMed（Drugs and Lactation Database）",
        url: "https://www.ncbi.nlm.nih.gov/sites/books/NBK501922/",
        use: "授乳中の薬剤移行や乳児影響をより深く調べたいときに使います。英語ですが、一次文献ベースで詳細確認したいときに強いです。",
        tags: ["授乳", "英語", "文献"]
      },
      {
        name: "Global DRO",
        url: "https://www.globaldro.com/JP/search/input?pls=true",
        use: "アスリートや競技者の服薬がドーピング規則に抵触しないかを確認したいときに使います。成分検索の習慣が重要です。",
        tags: ["ドーピング", "スポーツ", "成分検索"]
      },
      {
        name: "スポーツファーマシスト検索",
        url: "http://www3.playtruejapan.org/sports-pharmacist/search.php",
        use: "専門的なアンチ・ドーピング相談先を探したいときに使います。自分だけで曖昧に判断しないための逃げ道です。",
        tags: ["ドーピング", "相談先", "薬剤師"]
      },
      {
        name: "院外処方箋に記載可能な注射薬（CloseDi）",
        url: "https://closedi.jp/medical_supply/#j_chushayaku",
        use: "在宅や院外処方で注射薬の扱いが可能か確認したいときに使います。制度の理解が甘いとそのまま返戻や混乱に直結します。",
        tags: ["在宅", "注射薬", "制度"]
      },
      {
        name: "医療用麻薬廃棄方法推奨例一覧",
        url: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/iyaku/sonota/toriatsukai/haiki",
        use: "調剤済麻薬や使用済み製剤の廃棄方法を確認したいときに使います。法律、環境、実務の3つを雑に扱わないための資料です。",
        tags: ["麻薬", "廃棄", "法令"]
      }
    ]
  },
  {
    id: "cat-evidence",
    key: "深掘り",
    title: "論文・ガイドラインを深く調べたい",
    description: "全体像と最終根拠を分けて使うと、調査の速度と精度が両立します。",
    items: [
      {
        name: "PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
        use: "原著論文やレビューを幅広く検索したいときに使います。深掘りしたいなら、まとめ記事ではなくここに戻るべきです。",
        tags: ["論文", "原著", "文献検索"]
      },
      {
        name: "Cochrane Library",
        url: "https://www.cochranelibrary.com/cdsr/reviews",
        use: "エビデンスの質が高いシステマティックレビューを確認したいときに使います。治療介入の全体像把握に向いています。",
        tags: ["レビュー", "エビデンス", "Cochrane"]
      },
      {
        name: "MSDマニュアル プロフェッショナル版",
        url: "https://www.msdmanuals.com/ja-jp/professional",
        use: "疾患概説、診断、治療の全体像を短時間で整理したいときに便利です。まず全体像を掴んでから論文に入ると速いです。",
        tags: ["疾患概説", "総論", "診断"]
      },
      {
        name: "Minds ガイドラインライブラリ",
        url: "https://minds.jcqhc.or.jp/",
        use: "日本語の診療ガイドラインを横断的に探したいときに使います。ガイドライン検索の入口として非常に実務的です。",
        tags: ["ガイドライン", "日本語", "横断検索"]
      }
    ]
  },
  {
    id: "cat-learning",
    key: "学び",
    title: "研修・認定・学びを積み上げたい",
    description: "単位、認定、日々の学習、現場の知恵までを一つの面で整理しています。",
    items: [
      {
        name: "日本薬剤師研修センター",
        url: "https://www.jpec.or.jp/",
        use: "認定制度、研修会、更新要件の確認に使います。単位管理を後回しにする人ほど後で詰みます。",
        tags: ["研修", "認定", "単位"]
      },
      {
        name: "薬剤師認定制度認証機構（CPC）",
        url: "https://www.cpc-j.org/",
        use: "認証された認定制度の全体像を確認したいときに使います。制度の信頼性を見極める入口になります。",
        tags: ["認定", "制度", "CPC"]
      },
      {
        name: "PECS（薬剤師研修・認定電子システム）",
        url: "https://www.jpec.or.jp/sien/system/index.html",
        use: "研修履歴や認定申請を電子的に管理したいときに使います。登録を後回しにすると単位反映で詰まります。",
        tags: ["PECS", "研修", "申請"]
      },
      {
        name: "ためとこ",
        url: "https://info.tametoko.jp/",
        use: "忙しい中でも短時間で単位取得や学習継続をしたいときに使います。習慣化しやすい設計が強みです。",
        tags: ["e-learning", "単位", "継続学習"]
      },
      {
        name: "ためとこ「今日の治療薬書籍付き40単位パック」",
        url: "https://info.tametoko.jp/plan/",
        use: "新規取得や更新をまとめて進めたいときに候補になります。費用対効果を見て一気に単位を積みたい人向けです。",
        tags: ["PR", "単位", "プラン"]
      },
      {
        name: "Close Drug Information Room（CloseDi）",
        url: "https://closedi.jp/",
        use: "実務で刺さるDI記事や検索ツールを横断的に使いたいときに便利です。現場のそれ知りたかったに強いサイトです。",
        tags: ["実務", "DI", "検索ツール"]
      },
      {
        name: "ヤクメド",
        url: "https://yakumed.jp/welcome",
        use: "薬剤師同士の事例共有やQ&Aを見たいときに使います。公式一次情報ではないので、鵜呑みではなく補助線として使うのが前提です。",
        tags: ["コミュニティ", "事例", "Q&A"]
      },
      {
        name: "日経DI",
        url: "https://medical.nikkeibp.co.jp/inc/all/hotnews/archives/di/",
        use: "医薬品情報や制度改正、現場論点を効率よく追いたいときに使います。速報性と読みやすさが高い反面、最終確認は一次情報に戻すべきです。",
        tags: ["ニュース", "医薬品情報", "制度改正"]
      },
      {
        name: "JADEC eラーニング",
        url: "https://www.nittokyo.or.jp/modules/doctor/index.php?content_id=41",
        use: "糖尿病診療・療養支援の学び直しをしたいときに使います。専門外でも体系的に学べるのが利点です。",
        tags: ["糖尿病", "e-learning", "療養指導"]
      }
    ]
  },
  {
    id: "cat-operations",
    key: "薬局運営",
    title: "薬局運営・制度対応を効率化したい",
    description: "管理薬剤師業務や制度報告は、後回しにすると雪だるま式に重くなります。",
    items: [
      {
        name: "薬局機能情報提供制度について",
        url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kinoujouhou/index.html",
        use: "薬局機能情報の制度理解や報告・公開の全体像を確認したいときに使います。制度対応を感覚でやると抜けます。",
        tags: ["薬局機能情報", "制度", "報告"]
      },
      {
        name: "薬局ヒヤリ・ハット事例収集・分析事業",
        url: "https://www.yakkyoku-hiyari.jcqhc.or.jp/",
        use: "他施設のヒヤリ・ハットから事故予防を学びたいときに使います。自分の現場だけ見ていると同じ失敗を繰り返します。",
        tags: ["医療安全", "ヒヤリハット", "事故予防"]
      },
      {
        name: "管理薬剤師.com",
        url: "https://kanri.nkdesk.com/",
        use: "管理薬剤師業務、法令、報酬改定、実務論点を横断的に確認したいときに使います。整理量は多いですが、最終確認は公的資料が前提です。",
        tags: ["管理薬剤師", "法令", "報酬改定"]
      },
      {
        name: "選定療養計算ツール（CloseDi）",
        url: "https://closedi.jp/medical_supply/#j_senteiryouyou",
        use: "長期収載品の選定療養に伴う増加額の計算や説明準備に使います。制度を理解せずに説明すると患者対応で崩れます。",
        tags: ["選定療養", "計算", "患者説明"]
      }
    ]
  },
  {
    id: "cat-association",
    key: "薬剤師会",
    title: "薬剤師会・地域連携の入口",
    description: "全国と地域の両方を押さえて初めて現場の動きが見えます。",
    items: [
      {
        name: "日本薬剤師会",
        url: "https://www.nichiyaku.or.jp/",
        use: "薬剤師会の通知、研修、職能関連情報を追いたいときに使います。地域活動や職能の流れを押さえる入口です。",
        tags: ["薬剤師会", "職能", "全国"]
      },
      {
        name: "奈良県薬剤師会",
        url: "https://www.narayaku.or.jp/",
        use: "奈良県内の研修、地域連携、行政周辺情報を確認したいときに使います。地域実務は全国情報だけでは足りません。",
        tags: ["奈良", "地域連携", "研修"]
      }
    ]
  },
  {
    id: "cat-blogs",
    key: "実務ブログ",
    title: "現場感のある学び・実務ブログ",
    description: "ここは便利ですが、着地先ではありません。一次情報へ戻る補助線として使うべきです。",
    items: [
      {
        name: "Fizz-DI（お薬Q&A 〜Fizz Drug Information〜）",
        url: "https://www.fizz-di.jp/",
        use: "薬の違いや使い分けを、文献ベースでわかりやすく整理した記事を読みたいときに使います。患者説明の言語化にも役立ちます。",
        tags: ["比較", "患者説明", "文献ベース"]
      },
      {
        name: "薬剤師の脳みそ",
        url: "https://yakuzaishi.love/",
        use: "新薬、販売中止、実務論点を現場目線で追いたいときに使います。速報性は高いですが、必ず一次情報で裏を取る前提です。",
        tags: ["新薬", "販売中止", "現場目線"]
      }
    ]
  },
  {
    id: "cat-patient",
    key: "患者向け",
    title: "患者さんに案内しやすいサイト",
    description: "説明したあとに患者さんが自分で確認できる逃げ道を用意しておくと、指導の質が上がります。",
    items: [
      {
        name: "おくすりサーチ（PMDA）",
        url: "https://www.pmda.go.jp/okusuri_search/",
        use: "患者さんが自分の薬を自分で調べたいときの案内先として使えます。説明後のセルフフォロー先として優秀です。",
        tags: ["患者向け", "PMDA", "薬説明"]
      },
      {
        name: "ぜんそく.jp",
        url: "https://zensoku.jp/",
        use: "喘息患者さんへの疾患教育やセルフモニタリング支援に使えます。ACTなど自己管理の話につなげやすいです。",
        tags: ["患者向け", "喘息", "自己管理"]
      }
    ]
  }
];

const categoryGrid = document.getElementById("categoryGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilters = document.getElementById("categoryFilters");
const emptyState = document.getElementById("emptyState");

let currentFilter = "all";

function safeUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "#";
  } catch {
    return "#";
  }
}

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function createFilters() {
  const allBtn = document.createElement("button");
  allBtn.className = "filter-btn active";
  allBtn.dataset.filter = "all";
  allBtn.textContent = "すべて";
  categoryFilters.appendChild(allBtn);

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.dataset.filter = category.id;
    btn.textContent = category.key;
    categoryFilters.appendChild(btn);
  });

  categoryFilters.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    [...categoryFilters.querySelectorAll(".filter-btn")].forEach((item) => {
      item.classList.toggle("active", item === btn);
    });
    applyFilters();
  });
}

function renderCategories() {
  categoryGrid.innerHTML = "";

  categories.forEach((category) => {
    const section = createElement("section", "section-card");
    section.id = category.id;
    section.dataset.category = category.id;

    const title = createElement("div", "section-title");
    const titleCopy = document.createElement("div");
    const heading = createElement("h3", "", category.title);
    const description = createElement("p", "", category.description);
    titleCopy.appendChild(heading);
    titleCopy.appendChild(description);
    const badge = createElement("div", "section-badge", `${category.items.length} sites`);
    title.appendChild(titleCopy);
    title.appendChild(badge);

    const grid = createElement("div", "sites-grid");

    category.items.forEach((item) => {
      const article = createElement("article", "site-card");
      article.dataset.search = [category.title, category.key, item.name, item.use, ...(item.tags || [])]
        .join(" ")
        .toLowerCase();

      const top = createElement("div", "site-top");
      const siteTitle = createElement("h4", "site-title");
      const link = createElement("a", "site-link", item.name);
      link.href = safeUrl(item.url);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      siteTitle.appendChild(link);
      top.appendChild(siteTitle);

      const tagRow = createElement("div", "tag-row");
      (item.tags || []).forEach((tag) => {
        tagRow.appendChild(createElement("span", "tag", tag));
      });

      const use = createElement("p", "", item.use);

      article.appendChild(top);
      article.appendChild(tagRow);
      article.appendChild(use);

      grid.appendChild(article);
    });

    section.appendChild(title);
    section.appendChild(grid);
    categoryGrid.appendChild(section);
  });
}

function applyFilters() {
  const keyword = searchInput.value.trim().toLowerCase();
  let visibleCards = 0;

  document.querySelectorAll(".section-card").forEach((section) => {
    const matchesCategory = currentFilter === "all" || section.dataset.category === currentFilter;
    let sectionVisibleCards = 0;

    section.querySelectorAll(".site-card").forEach((card) => {
      const matchesKeyword = !keyword || card.dataset.search.includes(keyword);
      const show = matchesCategory && matchesKeyword;
      card.classList.toggle("hidden", !show);
      if (show) {
        sectionVisibleCards += 1;
        visibleCards += 1;
      }
    });

    const shouldShowSection = matchesCategory && sectionVisibleCards > 0;
    section.classList.toggle("hidden", !shouldShowSection);
  });

  emptyState.style.display = visibleCards === 0 ? "block" : "none";
}

if (categoryGrid && searchInput && categoryFilters && emptyState) {
  searchInput.addEventListener("input", applyFilters);
  createFilters();
  renderCategories();
  applyFilters();
}
