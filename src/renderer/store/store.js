import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const storeObject = {
  state: {
    devices: [],
    selectedItem: {},
  },
  getters: {
    getDevices: state => {
      return state.devices;
    },
    getSelected: state=>{return state.selectedItem}
  },
  mutations: {
    setDevices: function(state, devices) {
      state.devices = devices;
      state.selectedItem = devices.phones[0];
    },
    setSelected: function(state, selectedItem) {
      state.selectedItem = selectedItem;
    },
    setNext: function(state, selected) {
     for (let i = 0; i < state.devices.phones.length; i++) {
        if (state.devices.phones[i].id === selected.id && state.devices.phones[i+1]) {
          state.selectedItem=state.devices.phones[i+1];
        }
      } 
    },
    setPrevious: function(state, selected) {
      for (let i = 0; i < state.devices.phones.length; i++) {
         if (state.devices.phones[i].id === selected.id && state.devices.phones[i-1]) {
           state.selectedItem=state.devices.phones[i-1];
         }
       } 
     },
    removeDevice: function(state, deviceID) {
      for (let i = 0; i < state.devices.length; i++) {
        if (state.devices[i].id === deviceID) {
          state.devices.splice(i, 1);
        }
      }
    }
  },
  actions: {
    fillDevices: function(context, devices) {
      context.commit("setDevices", devices);
    },
    deviceOrder: function(context, deviceID) {
      context.commit("removeOrder", deviceID);
    },
    setNext: function(context) {
      context.commit("setNext", context.getters.getSelected);
    },
    setPrevious: function(context) {
      context.commit("setPrevious", context.getters.getSelected);
    }
  },
  modules: {}
};

const store = new Vuex.Store(storeObject);
export default store;