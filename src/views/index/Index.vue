<template>
  <el-container>
    <el-header>
      <el-row :gutter="10" type="flex" align="middle">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="grid-content bg-purple-light">
            <el-card
              class="box-card"
            >当前Demo页面仅为表达：将一个原始的Json，通过选择所需的属性，经过依据JT模板定义的规则的一系列自定义编辑，自动转换为可用的JT模板</el-card>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row :gutter="10">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>导入原始Json</span>
            </div>
            <div>
              <div class="grid-content bg-purple-light">
                <JsonView :json="jsonData"></JsonView>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>编辑 JT 模板</span>
            </div>
            <div>
              <div class="grid-content bg-purple-light">
                <el-button type="success" icon="el-icon-circle-plus-outline">添加属性</el-button>
                <el-row :gutter="10">
                  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <div
                      class="grid-content bg-top-node"
                      style="line-height:36px; padding-left:5px"
                    >
                      name [nameinfo]
                      <el-button type="danger" icon="el-icon-delete" circle></el-button>
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <div class="grid-content bg-purple-light"></div>
                  </el-col>
                  <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >type : array</div>
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >item : object</div>
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >
                      filter :
                      <el-button type="danger" icon="el-icon-delete" circle></el-button>
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                      <div>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              key: nametype
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              values: ["原名","chs"]
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >
                      result : object
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                      <div>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              count: 1
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="grid-content bg-purple-light">
                <el-row :gutter="10">
                  <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <div
                      class="grid-content bg-top-node"
                      style="line-height:36px; padding-left:5px"
                    >
                      photo [photoinfo]
                      <el-button type="danger" icon="el-icon-delete" circle></el-button>
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="10">
                  <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <div class="grid-content bg-purple-light"></div>
                  </el-col>
                  <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="22">
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >type : array</div>
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >
                      item : array
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                      <div>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              item: object
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>

                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >
                      result : array
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                      <div>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              contactSubArrays: true
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                    <div
                      class="grid-content bg-purple-dark"
                      style="line-height:36px; padding-left:5px"
                    >
                      display :
                      <el-button type="danger" icon="el-icon-delete" circle></el-button>
                      <el-button type="primary" icon="el-icon-circle-plus-outline" circle></el-button>
                      <div>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              label: 相册
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              type: imageSlide
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                        <el-row :gutter="10">
                          <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                            <div class="grid-content bg-purple-dark"></div>
                          </el-col>
                          <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <div
                              class="grid-content bg-purple"
                              style="line-height:36px; padding-left:5px"
                            >
                              imageColumn: imgPath
                              <el-button type="danger" icon="el-icon-delete" circle></el-button>
                            </div>
                          </el-col>
                        </el-row>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>实时生成的 JT 模板</span>
              </div>
              <JsonView :json="templateJson"></JsonView>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import JsonView from "@/components/JsonView";
export default {
  name: "HelloWorld",
  components: { JsonView },
  props: {
    msg: String,
  },
  data() {
    return {
      jsonData: {
        "@id": "http://data.library.sh.cn/entity/person/izik600kzhyxxt1l",
        "@type": "http://www.library.sh.cn/ontology/Person",
        relation: [
          "http://data.library.sh.cn/dy/resource/movie/aaiug8zyrfh5s6io",
          "http://data.library.sh.cn/dy/resource/movie/jgo46jz3y12du006",
          "http://data.library.sh.cn/dy/resource/movie/oh4ddj7mo1kpqddj",
        ],
        birthPlace: "http://data.library.sh.cn/entity/place/hda1dkcayas4fs98",
        birthday: "1910.4.26",
        briefBiography: [
          "女。原名凤根，学名玉英，艺名玲玉。广东香山人。电影演员。",
          "广东香山（今中山）人，生于上海。本名凤根，学名玉英。女。",
          "女。广东香山（今中山）人（生于上海）。小名凤根，学名玉英，艺名玲玉。",
        ],
        contributorOf:
          "http://data.library.sh.cn/dy/resource/music/0kibucmgx1sviekv",
        createdWork: [
          "杨小真",
          "论人言可畏",
          "故都春梦",
          "挂名夫妻",
          "珍珠冠",
          "血泪碑",
          "人生",
          "野草闲花",
          "新女性",
          "劫后孤鸿",
          "小玩意",
          "三个摩登女性",
          "神女",
          "自杀合同",
        ],
        deathday: "1935.3.8",
        name: [
          "http://data.library.sh.cn/authority/name/8eywkt17z31l1ufm",
          "http://data.library.sh.cn/authority/name/lgf57ewyu4g73ae7",
          "http://data.library.sh.cn/authority/name/3ia8v6nnuo4qjvmn",
          "http://data.library.sh.cn/authority/name/1jgy65lij0t5dqnt",
          "http://data.library.sh.cn/authority/name/8stzusv3l202umk7",
        ],
        nativePlace: "http://data.library.sh.cn/entity/place/4yw8p614nx8xcyld",
        noteOfSource: [
          "中国近现代人名大辞典",
          "电影知识库",
          "中国近现代名人辞典",
        ],
        relatedOrganization: "从事电影艺术",
        temporal:
          "http://data.library.sh.cn/authority/temporal/7ase6ple2nud826q",
        gender: "女",
        img: "http://data.library.sh.cn/resource/image/4zwzlzc4ixxpl1h5",
        "http://xmlns.com/foaf/0.1/name": [
          { "@language": "chs", "@value": "阮玲玉" },
          { "@language": "cht", "@value": "阮玲玉" },
          { "@language": "en", "@value": "ruanlingyu" },
        ],
        "@context": {
          relation: {
            "@id": "http://purl.org/dc/terms/relation",
            "@type": "@id",
          },
          createdWork: "http://www.library.sh.cn/ontology/createdWork",
          name: {
            "@id": "http://www.library.sh.cn/ontology/name",
            "@type": "@id",
          },
          relatedOrganization:
            "http://www.library.sh.cn/ontology/relatedOrganization",
          gender: "http://xmlns.com/foaf/0.1/gender",
          deathday: "http://www.library.sh.cn/ontology/deathday",
          temporal: {
            "@id": "http://www.library.sh.cn/ontology/temporal",
            "@type": "@id",
          },
          briefBiography: "http://www.library.sh.cn/ontology/briefBiography",
          noteOfSource: "http://www.library.sh.cn/ontology/noteOfSource",
          birthPlace: {
            "@id": "http://www.library.sh.cn/ontology/birthPlace",
            "@type": "@id",
          },
          birthday: "http://www.library.sh.cn/ontology/birthday",
          nativePlace: {
            "@id": "http://www.library.sh.cn/ontology/nativePlace",
            "@type": "@id",
          },
          contributorOf: {
            "@id": "http://www.library.sh.cn/ontology/contributorOf",
            "@type": "@id",
          },
          img: { "@id": "http://xmlns.com/foaf/0.1/img", "@type": "@id" },
        },
        briefBiographyitem:
          "女。原名凤根，学名玉英，艺名玲玉。广东香山人。",
        nameinfo: [],
        photoinfo: [],
      },
      templateJson: {
        name: {
          mappingName: "nameinfo",
          type: "array",
          item: {
            type: "object",
          },
          filter: [
            {
              key: "nametype",
              values: ["原名", "chs"],
            },
          ],
          result: {
            count: 1,
            type: "object",
          },
        },
        photo: {
          mappingName: "photoinfo",
          type: "array",
          item: {
            type: "array",
            item: {
              type: "object",
            },
          },
          result: {
            type: "array",
            contactSubArrays: true,
          },
          display: {
            label: "相册",
            type: "imageSlide",
            imageColumn: "imgPath",
          },
        },
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-row {
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #c9dcf5;
}
.bg-purple {
  background: #e1fde5;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.bg-top-node {
  background-color: #f5c4c4;
}
</style>
