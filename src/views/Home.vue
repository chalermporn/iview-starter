<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            Home
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            User
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                Stats
            </template>
            <MenuGroup title="test1">
                <MenuItem name="3-1">text1</MenuItem>
                <MenuItem name="3-2">text2</MenuItem>
                <MenuItem name="3-3">text3</MenuItem>
            </MenuGroup>
            <MenuGroup title="test2">
                <MenuItem name="3-4">text4</MenuItem>
                <MenuItem name="3-5">text5</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            construct
        </MenuItem>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
    <br />
    <br />
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button shape="circle" icon="ios-search"></Button>
    <Button icon="ios-search">Search</Button>
    <Button shape="circle" icon="ios-search">Search</Button>
    <Button shape="circle">Circle</Button>
    <Menu :theme="theme3" active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="md-document" />
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="md-chatbubbles" />
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
            <MenuItem name="3">
                <Icon type="md-heart" />
                用户留存
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-leaf" />
                流失用户
            </MenuItem>
        </MenuGroup>
    </Menu>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data () {
    return {
      theme1: 'dark',
      theme3: 'dark'
    }
  }
}
</script>
