
class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :editing_destroying_filter, only: [:edit, :update, :destroy]

  # GET /events
  # GET /events.json
  def index
    @current_user=current_user
    buddies = Buddy.where(:user => current_user)
    @events = []
    #add buddied pets
    pets = []
    buddies.each do |buddy|
      pets += [buddy.register]
    end
    pets.each do |pet|
      @events += pet.events 
    end
    @events += current_user.events
  end

  # GET /events/1
  # GET /events/1.json
  def show
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
  end

  # POST /events
  # POST /events.json
  def create
    
    #creating new event with parameters
    @event = Event.new(event_params)
    #set the new event's current user and register
    @event.User= current_user
    @event.Register = Register.where(:name => @event.pet_name).first

    # Start of the addition of records to food table
    #counters= starting/ending dates.
    #time is the dy and time for feeding to happen.
    counter = @event.starts_at
    counter2= @event.ends_at
    time = @event.time
     while counter<=counter2 do
      counter=counter+1.day
      time =time+1.day
      amount_inbowl= @event.amount
      ate_random= Random.rand(x)
      left = amount_inbowl-ate_random
      Food.create(:Register => Register.where(:name => 
      @event.pet_name).first, :weight => amount_inbowl, :User => @event.User ,:date => counter,
      :ate => ate_random, :leftovers => left, :time => time)
  end
  # end of adding records to food table , Karim Farid.
    #Check conditions for creating events
    buddy_pet = Buddy.where(:user => current_user, :register => @event.Register).first
      if !editing_destroying_filter_condition then

        flash[:notice] = "Check pet's name is correct or you can create events for this pet!"
        redirect_to new_event_path
      else
        respond_to do |format|
          if @event.save
            format.html { redirect_to @event, notice: 'Event was successfully created.' }
            format.json { render :show, status: :created, location: @event }
          else
            format.html { render :new }
            format.json { render json: @event.errors, status: :unprocessable_entity }
          end
        end
      end
  end


  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    respond_to do |format|
      if @event.update(event_params)
        format.html { redirect_to @event, notice: 'Event was successfully updated.' }
        format.json { render :show, status: :ok, location: @event }
      else
        format.html { render :edit }
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /events/1
  # DELETE /events/1.json
  def destroy
    @event.destroy
    respond_to do |format|
      format.html { redirect_to events_url, notice: 'Event was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  private
      # Use callbacks to share common setup or constraints between actions.
      def set_event
        @event = Event.find(params[:id])
      end

      #find the current user's pet.
      def pet
        current_user.registers.find_by name: @event.pet_name
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def event_params
        params.require(:event).permit(:pet_name, :amount, :starts_at, :ends_at, :time)
      end
      #condition for creating, editing, destroying privilages.
      def editing_destroying_filter_condition
        buddy_pet = Buddy.where(:user => current_user, :register => @event.Register).first
        ((!@event.Register.nil? && @event.Register.User == current_user) || (!buddy_pet.nil? && buddy_pet.can_schedule))
      end
      #filter for creating, editing and destroying
      def editing_destroying_filter
        unless editing_destroying_filter_condition
        flash[:notice] = "You're not authorized to edit or delete!"
        redirect_to events_path
        end
      end
  end
