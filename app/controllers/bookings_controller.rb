class BookingsController < ApplicationController

    def index
        bookings = Bookings.all
        render json: bookings
    end

    def show
        booking = Booking.find(booking_params)
        redner json: booking
    end

    def update
        booking = Booking.find_by(:id params[:id])
        Booking.update(booking_params)
        render json: booking
    end

    def destroy
        booking = Booking.find_by(:id params[:id])
        booking.destroy
    end

    private

    def booking_params
        params.permit(:guest, :checkin_date, :checkout_date)
    end

end
