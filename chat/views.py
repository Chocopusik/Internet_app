from django.shortcuts import render

def room(request):
    room_name = "room"
    return render(request, "chat/room.html", {"room_name": room_name})