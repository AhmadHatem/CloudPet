
class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]

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
    

    @event = Event.new(event_params)
    


    @event.User= current_user
    @event.Register = Register.where(:name => @event.pet_name).first
    buddies = Buddy.where(:user => current_user)
    buddy_pets = []
    buddy_pet = nil
    # Start of the addition of records to food table
    counter = @event.starts_at
    counter2= @event.ends_at
    time = @event.time
     while counter<counter2 do
      counter=counter+1.day
      time =time+1.day
      x= @event.amount
      y= Random.rand(x)
      z = x-y
      Food.create(:Register => Register.where(:name => 
      @event.pet_name).first, :weight => @event.amount, :User => @event.User ,:date => counter,
      :ate => y, :leftovers => z, :time => time)
  end
  # end of adding records to food table , Karim Farid.
      buddies.each do |buddy|
      if buddy.register == pet then
        buddy_pet = pet
      end
    end
    if pet.nil? || (!current_user.registers.include?(pet) && buddy_pet.nil?)
        flash[:notice] = "Check pet's name is correct!"
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
      format.html { redirect_to events_url, notice: 'Event was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end


    def pet
      current_user.registers.find_by name: @event.pet_name
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:pet_name, :amount, :starts_at, :ends_at)
    end
end
