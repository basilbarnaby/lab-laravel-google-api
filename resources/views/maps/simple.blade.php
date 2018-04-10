@extends('layouts.maps')

@section('content')
    <form @submit.prevent="locateAddress">
        <input type="text" name="" id="" v-model="address" placeholder="Enter an address">
        <button type="submit">Geolocate</button>
    </form>
    <div id="map"></div>
@endsection

@section('isolatedScripts')
    <script src="https://unpkg.com/vue@2.5.16/dist/vue.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5XV02LEsTEc8i8b63AeY2a4odYQfrdDw&callback=app.createMap"
        async defer></script>
    <script src="/js/maps.js"></script>
@endsection