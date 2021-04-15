import React from 'react'

import ViewPager from '@react-native-community/viewpager'

import {
  View, 
  Text
} from 'react-native'

import styles from './styles'

const Balance = () => {
  return (
    <>
      <ViewPager style={styles.view} initialPage={1}>
          <View style={styles.pager} key="0">
            <Text style={styles.title}>Previsão Mes Atual</Text>
            <Text style={styles.balance}>R$ 1.342,48</Text>

            <View style={styles.contentView}>
              <View style={styles.content} >
                <Text style={styles.expenses}>R$ 12.342,48</Text>
                <Text style={styles.title}>Receitas totais</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.incomes}>R$ 2.342,48</Text>
                <Text style={styles.title}>Despesas totais</Text>
              </View>
            </View>
          </View>
          <View style={styles.pager} key="1">
            <Text style={styles.title}>Mes Atual</Text>
            <Text style={styles.balance}>R$ 12.342,48</Text>
            <Text style={styles.title}>Saldo em contas</Text>

            <View style={styles.contentView}>
              <View style={styles.content} >
                <Text style={styles.expenses}>R$ 12.342,48</Text>
                <Text style={styles.title}>Receitas totais</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.incomes}>R$ 2.342,48</Text>
                <Text style={styles.title}>Despesas totais</Text>
              </View>
            </View>
          </View>
          <View style={styles.pager} key="2">
            <Text style={styles.title}>Previsão Mes Seguinte</Text>
            <Text style={styles.balance}>R$ 12.342,48</Text>

            <View style={styles.contentView}>
              <View style={styles.content} >
                <Text style={styles.expenses}>R$ 12.342,48</Text>
                <Text style={styles.title}>Receitas totais</Text>
              </View>
              <View style={styles.content}>
                <Text style={styles.incomes}>R$ 2.342,48</Text>
                <Text style={styles.title}>Despesas totais</Text>
              </View>
            </View>
          </View>
        </ViewPager>
    </>
  )
}


export default Balance;