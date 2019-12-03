import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filteredData: {
      name: "",
      cras: "",
      families: 0,
      data: []
    },
    months: [
      { num: 0, name: "Janeiro" },
      { num: 1, name: "Fevereiro" },
      { num: 2, name: "Março" },
      { num: 3, name: "Abril" },
      { num: 4, name: "Maio" },
      { num: 5, name: "Junho" },
      { num: 6, name: "Julho" },
      { num: 7, name: "Agosto" },
      { num: 8, name: "Setembro" },
      { num: 9, name: "Outubro" },
      { num: 10, name: "Novembro" },
      { num: 11, name: "Dezembro" }
    ],
    sheets: [
      {
        data: [
          {
            TITULAR: "MARIA VALDIR DE OLIVEIRA",
            DTNASCTIT: "05/03/1999",
            NISTITULAR: "10003621631",
            VLRBASICO: "89",
            VLRBVG: "R$ -",
            VLRBVN: "R$ -",
            VLRVAR06: "R$ -",
            VLRVAR715: "R$ -",
            VLRBVJ: "R$ -",
            VLRBSP: "R$ -",
            VLRTOTAL: "89",
            SITFAM: "LIBERADA",
            ENDERECO: "R BARBOSA OLIVEIRA 1000",
            BAIRRO: "ALTO SÃO CRISTO",
            DEPENDENTE: "MARIA VIOLETA QUEIROZ",
            DTNASCDEP: "20546",
            RENDAPERC: "60",
            RENDA_COM_PBF: "104.5"
          },
          {
            TITULAR: "VALDEMI SOUSA MAURO",
            DTNASCTIT: "20/03/1978",
            NISTITULAR: "10602022546",
            VLRBASICO: "89",
            VLRBVG: "R$ -",
            VLRBVN: "R$ -",
            VLRVAR06: "R$ -",
            VLRVAR715: "41",
            VLRBVJ: "R$ -",
            VLRBSP: "R$ -",
            VLRTOTAL: "130",
            SITFAM: "LIBERADA",
            ENDERECO: "R   ANTONIO VIEIRA 100",
            BAIRRO: "COHAB",
            DEPENDENTE: "LUIS CAMARAO VIANA",
            DTNASCDEP: "38597",
            RENDAPERC: "318",
            RENDA_COM_PBF: "361.33"
          },
          {
            TITULAR: "FRANCISCA MARIA",
            DTNASCTIT: "01/01/1989",
            NISTITULAR: "10642365636",
            VLRBASICO: "89",
            VLRBVG: "R$ -",
            VLRBVN: "R$ -",
            VLRVAR06: "41",
            VLRVAR715: "R$ -",
            VLRBVJ: "R$ -",
            VLRBSP: "R$ -",
            VLRTOTAL: "130",
            SITFAM: "LIBERADA",
            ENDERECO: "R AUGUSTO JUNIOR 190",
            BAIRRO: "COHAB",
            DEPENDENTE: "MARIA FERNANDA JUCA",
            DTNASCDEP: "42230",
            RENDAPERC: "87",
            RENDA_COM_PBF: "119.5"
          }
        ],
        month: "Janeiro",
        uploadedAt: new Date(),
        year: "2018"
      },
      {
        data: [
          {
            TITULAR: "MARIA VALDIR DE OLIVEIRA",
            DTNASCTIT: "19/02/1980",
            NISTITULAR: "10003621631",
            VLRBASICO: "89",
            VLRBVG: "R$ -",
            VLRBVN: "R$ -",
            VLRVAR06: "R$ -",
            VLRVAR715: "R$ -",
            VLRBVJ: "R$ -",
            VLRBSP: "R$ -",
            VLRTOTAL: "89",
            SITFAM: "LIBERADA",
            ENDERECO: "R BARBOSA OLIVEIRA 1000",
            BAIRRO: "ALTO SÃO FRANCISCO",
            DEPENDENTE: "MARIA VIOLETA QUEIROZ",
            DTNASCDEP: "20546",
            RENDAPERC: "60",
            RENDA_COM_PBF: "104.5"
          },
          {
            TITULAR: "VALDEMI SOUSA MAURO",
            DTNASCTIT: "20/12/1991",
            NISTITULAR: "10602022546",
            VLRBASICO: "89",
            VLRBVG: "R$ -",
            VLRBVN: "R$ -",
            VLRVAR06: "R$ -",
            VLRVAR715: "41",
            VLRBVJ: "R$ -",
            VLRBSP: "R$ -",
            VLRTOTAL: "130",
            SITFAM: "LIBERADA",
            ENDERECO: "R ANTONIO VIEIRA 100",
            BAIRRO: "COHAB",
            DEPENDENTE: "LUIS CAMARAO VIANA",
            DTNASCDEP: "38597",
            RENDAPERC: "318",
            RENDA_COM_PBF: "361.33"
          },
          {
            TITULAR: "VALDI SOUSA",
            DTNASCTIT: "20/12/1991",
            NISTITULAR: "10602022546",
            VLRBASICO: "89",
            VLRBVG: "70",
            VLRBVN: "R$ -",
            VLRVAR06: "90",
            VLRVAR715: "41",
            VLRBVJ: "R$ -",
            VLRBSP: "R$ -",
            VLRTOTAL: "130",
            SITFAM: "LIBERADA",
            ENDERECO: "R ANTONIO VIEIRA 100",
            BAIRRO: "COHAB",
            DEPENDENTE: "LUIS CAMARAO VIANA",
            DTNASCDEP: "38597",
            RENDAPERC: "318",
            RENDA_COM_PBF: "361.33"
          },
          {
            TITULAR: "VALDEMI SOUSA MAURO",
            DTNASCTIT: "20/12/1991",
            NISTITULAR: "10602022546",
            VLRBASICO: "89",
            VLRBVG: "R$ -",
            VLRBVN: "R$ -",
            VLRVAR06: "R$ -",
            VLRVAR715: "41",
            VLRBVJ: "R$ -",
            VLRBSP: "34",
            VLRTOTAL: "130",
            SITFAM: "LIBERADA",
            ENDERECO: "R ANTONIO VIEIRA 100",
            BAIRRO: "COHAB",
            DEPENDENTE: "LUIS CAMARAO VIANA",
            DTNASCDEP: "38597",
            RENDAPERC: "318",
            RENDA_COM_PBF: "70"
          }
        ],
        month: "Fevereiro",
        uploadedAt: new Date(),
        year: "2018"
      }
    ],
    cras: [
      {
        name: "CRAS - Campo Velho",
        bairros: [
          { name: "Bairro - Boto" },
          { name: "Bairro - Alto São Francisco" },
          { name: "Bairro - Campo Novo" },
          { name: "Bairro - Cohab" },
          { name: "Bairro - Curicaca" },
          { name: "Bairro - Monte Alegre" },
          { name: "Bairro - Nova Jeruzalém" },
          { name: "Bairro - Bairro Pitiú" },
          { name: "Bairro - Juatama" },
          { name: "Bairro - São João dos Queiroz" },
          { name: "Bairro - Tapuiará" }
        ]
      },
      {
        name: "CRAS - Campo Novo",
        bairros: [
          { name: "Bairro - Boto" },
          { name: "Bairro - Alto São Francisco" },
          { name: "Bairro - Campo Novo" },
          { name: "Bairro - Cohab" },
          { name: "Bairro - Curicaca" },
          { name: "Bairro - Monte Alegre" },
          { name: "Bairro - Nova Jeruzalém" },
          { name: "Bairro - Bairro Pitiú" },
          { name: "Bairro - Juatama" },
          { name: "Bairro - São João dos Queiroz" },
          { name: "Bairro - Tapuiará" }
        ]
      },
      {
        name: "CRAS - Bruna Queiroz",
        bairros: [
          { name: "Bairro - Boto" },
          { name: "Bairro - Alto São Francisco" },
          { name: "Bairro - Campo Novo" },
          { name: "Bairro - Cohab" },
          { name: "Bairro - Curicaca" },
          { name: "Bairro - Monte Alegre" },
          { name: "Bairro - Nova Jeruzalém" },
          { name: "Bairro - Bairro Pitiú" },
          { name: "Bairro - Juatama" },
          { name: "Bairro - São João dos Queiroz" },
          { name: "Bairro - Tapuiará" }
        ]
      },
      {
        name: "CRAS - Renascer",
        bairros: [
          { name: "Bairro - Boto" },
          { name: "Bairro - Alto São Francisco" },
          { name: "Bairro - Campo Novo" },
          { name: "Bairro - Cohab" },
          { name: "Bairro - Curicaca" },
          { name: "Bairro - Monte Alegre" },
          { name: "Bairro - Nova Jeruzalém" },
          { name: "Bairro - Bairro Pitiú" },
          { name: "Bairro - Juatama" },
          { name: "Bairro - São João dos Queiroz" },
          { name: "Bairro - Tapuiará" }
        ]
      }
    ],
    filters: [
      {
        name: "Tempo de Cadastro",
        data: [
          {
            max: 1,
            min: 0,
            name: "Menos de 1 ano"
          },
          {
            max: 3,
            min: 1,
            name: "De 1 a 2 anos e 11 meses"
          },
          {
            max: 3,
            min: 5,
            name: "De 3 a 5 anos e 11 meses"
          },
          {
            max: 99,
            min: 5,
            name: "Mais de 6 anos"
          }
        ]
      },
      {
        name: "Média de Membros",
        data: [
          {
            max: 2,
            min: 0,
            name: "Apenas 1 membro"
          },
          {
            max: 5,
            min: 2,
            name: "De 2 a 4 membros"
          },
          {
            max: 8,
            min: 5,
            name: "De 5 a 7 membros"
          },
          {
            max: 99,
            min: 8,
            name: "Mais de 8 membros"
          }
        ]
      },
      {
        name: "Benefícios",
        data: [
          {
            name: "Variável Gravidez"
          },
          {
            name: "Variável Nutriz"
          },
          {
            name: "Variável 0 à 6 anos"
          },
          {
            name: "Variável 7 a 15 anos"
          },
          {
            name: "Superação da Pobreza"
          }
        ]
      },
      {
        name: "Renda",
        data: [
          {
            max: 90,
            min: 0,
            name: "Pobreza"
          },
          {
            max: 999,
            min: 90,
            name: "Extrema Pobreza"
          }
        ]
      },
      {
        name: "Situação Cadastral",
        data: [
          {
            name: "Bloqueado"
          },
          {
            name: "Liberado"
          }
        ]
      }
    ]
  },

  mutations: {
    pushSheet: (state, payload) => {
      state.sheets.push(payload)
    },

    setFilteredData: (state, payload) => {
      state.filteredData = payload
    }
  },

  actions: {
    doMunicipalIdentification: (context, payload) => {
      let cras = context.state.cras.filter(a => {
        return a.name === payload.area_atendimento
      })[0]

      let lastYear = context.state.sheets.sort((a, b) => b.year - a.year)

      if (!lastYear || lastYear.length == 0) return

      lastYear = lastYear[0].year

      let sheet = context.state.sheets.filter(a => a.year === lastYear)

      switch (payload.filter) {
        case "Situação Cadastral":
          {
            if (sheet.length === 1) {
              console.log("Sheet", sheet)
              context.commit("setFilteredData", {
                name: "Situação Cadastral",
                cras: payload.area_atendimento,
                families: sheet[0].data.length,
                data: [
                  {
                    label: "Em Observação",
                    value: 0
                  },
                  {
                    label: "Liberado",
                    value: sheet[0].data.length
                  }
                ]
              })
            } else {
              let sheet1 = sheet[sheet.length - 1]
              let sheet2 = sheet[sheet.length - 2]

              let difference = sheet1.data.length - sheet2.data.length
              let total = sheet1.data.length

              if (difference < 0) {
                difference *= -1
                total = sheet2.data.length
              }

              context.commit("setFilteredData", {
                name: "Situação Cadastral",
                cras: payload.area_atendimento,
                families: total + difference,
                data: [
                  {
                    label: "Em Observação",
                    value: difference
                  },
                  {
                    label: "Liberado",
                    value: total
                  }
                ]
              })
            }
          }
          break
        case "Renda":
          {
            let sheet1 = sheet[sheet.length - 1]
            let a = {
              name: "Renda",
              cras: payload.area_atendimento,
              families: sheet1.data.length,
              data: [
                {
                  label: "Extrema Pobreza",
                  value: sheet1.data.filter(
                    a =>
                      parseFloat(a.RENDA_COM_PBF) < 90 ||
                      parseFloat(a["RENDA COM PBF"]) < 90
                  ).length
                },
                {
                  label: "Pobreza",
                  value: sheet1.data.filter(
                    a =>
                      parseFloat(a.RENDA_COM_PBF) >= 90 ||
                      parseFloat(a["RENDA COM PBF"]) >= 90
                  ).length
                }
              ]
            }
            context.commit("setFilteredData", a)
          }
          console.log("Renda")
          break
        case "Benefícios":
          {
            let sheet1 = sheet[sheet.length - 1]
            let a = {
              name: "Benefícios",
              cras: payload.area_atendimento,
              families: sheet1.data.length,
              data: [
                {
                  label: "Variável Gravidez",
                  value: sheet1.data.filter(a => !isNaN(parseFloat(a.VLRBVG)))
                    .length
                },
                {
                  label: "Variável Nutriz",
                  value: sheet1.data.filter(a => !isNaN(parseFloat(a.VLRBVN)))
                    .length
                },
                {
                  label: "Variável 0 à 6 anos",
                  value: sheet1.data.filter(a => !isNaN(parseFloat(a.VLRVAR06)))
                    .length
                },
                {
                  label: "Variável 7 a 15 anos",
                  value: sheet1.data.filter(
                    a => !isNaN(parseFloat(a.VLRVAR715))
                  ).length
                },
                {
                  label: "Superação da Pobreza",
                  value: sheet1.data.filter(a => !isNaN(parseFloat(a.VLRBSP)))
                    .length
                }
              ]
            }
            context.commit("setFilteredData", a)
          }
          console.log("Benefícios")
          break
        case "Média de Membros":
          console.log("Média de Membros")
          break
        case "Tempo de Cadastro":
          console.log("Tempo de Cadastro")
          break
        default:
          console.log("Error")
          break
      }
    }
  },

  getters: {
    getSheets: state => state.sheets,
    getCras: state => state.cras,
    // getSelectedCras: state => state.selectedCras,
    getFilters: state => state.filters,
    getFilteredData: state => state.filteredData
  },

  modules: {}
})
