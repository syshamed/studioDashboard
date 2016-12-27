import {Participant} from "../../shared/model/participant";
import {Thread} from "../../shared/model/thread";
import {Message} from "../../shared/model/message";
import {Map, List} from 'immutable';
import {WeatherModel} from "./model/WeatherModel";

export interface StoreData {

    participants: {[key: number]: Participant};
    threads: {[key: number]: Thread};
    messages: {[key: number]: Message};

}

export interface MyStoreData {
    local: Map<string,any>;
    customers: List<any>;
    weather: List<WeatherModel>;
}

export interface IAppDb {
    totalStations: Map<string,any>;
    appStartTime: number;
    appBaseUrl: string;
    credentials: Map<string,any>;
    twoFactorStatus: Map<string,any>;
    accountType: Map<string,any>;
    cloudServers: Map<string,any>;
    serversStatus: Map<string,any>;
}

export const INITIAL_STORE_DATA: StoreData = {
    threads: {},
    messages: {},
    participants: {}
};

export const INITIAL_WEATHER_DATA: MyStoreData = {
    local: Map<string,any>(),
    customers: List<any>([1, 2, 3, 4]),
    weather: List<WeatherModel>()
};

export const INITIAL_APP_DB: IAppDb = {
        totalStations: Map<string,any>(),
        appStartTime: -1,
        appBaseUrl: '',
        credentials: Map<string,any>(),
        twoFactorStatus: Map<string,any>(),
        accountType: Map<string,any>(),
        cloudServers: Map<string,any>(),
        serversStatus: Map<string,any>(),
};
